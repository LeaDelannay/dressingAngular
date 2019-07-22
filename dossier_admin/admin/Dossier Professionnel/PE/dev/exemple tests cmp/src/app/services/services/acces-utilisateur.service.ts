import {Inject, Injectable} from '@angular/core';
import {INavigation, NavigationService} from '@pe-angular-communs/candidat-layout';
import {ErreurMajeur} from '@pe-angular-communs/logger';
import {forkJoin, Observable, of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AppConfigurationToken} from '../../configuration/app-configuration.token';
import {IConfiguration} from '../../configuration/configuration';
import {CoordonneesUtilsService} from '../../services/services/coordonnees-utils.service';
import {IndividuService} from '../../services/services/individu.service';
import {ICoordonnees, IInformationsConseiller} from '../../types/pe-types';
import {PiloteService} from './pilote.service';

@Injectable()
export class AccesUtilisateurService {
	constructor(
		@Inject(AppConfigurationToken) public appConfiguration: IConfiguration,
		private piloteService: PiloteService,
		private individuService: IndividuService,
		private navigationService: NavigationService
	) {}

	private getPageAccessible(nomPilote: string): Observable<boolean> {
		//Vérifie qu'il s'agit bien d'un DE et non d'un candidat
		const obsIsDE: Observable<boolean> = this.navigationService.lire().pipe(
			map(
				(navigationData: INavigation) => {
					if (!navigationData.typo || navigationData.typo.startsWith('C')) {
						return false;
					}
					return true;
				},
				err => {
					return false;
				}
			)
		);

		//vérifie que le DE a bien un code Saphir, sinon, utilise le code postal du DE
		const obsGetCodeDepartement: Observable<string> = this.individuService.getCodeSaphir().pipe(
			switchMap((informationsConseiller: IInformationsConseiller) => {
				if (informationsConseiller && informationsConseiller.agence && informationsConseiller.agence.codeSaphir) {
					return of(
						CoordonneesUtilsService.recupererDepartementDepuisCodePostal(informationsConseiller.agence.codeSaphir)
					);
				} else {
					return this.individuService.getCoordonneesIndividu().pipe(
						map((coordonnees: ICoordonnees) => {
							return coordonnees.codePostal;
						}),
						catchError(error => {
							return of('');
						})
					);
				}
			}),
			catchError(error => {
				return of('');
			})
		);

		//on attend les réponses de EX017 et EX002 puis on appelle le pilote
		return forkJoin(obsIsDE, obsGetCodeDepartement).pipe(
			switchMap(([valObsIsDE, valObsGetCodeDepartement]) => {
				if (valObsIsDE && valObsGetCodeDepartement) {
					return this.piloteService.getEtatPilote(valObsGetCodeDepartement, 'EPE', nomPilote).pipe(
						catchError(error => {
							throw new ErreurMajeur('Erreur de récupération du pilote : ' + (error ? error.message : ''));
						})
					);
				} else {
					return of(false);
				}
			}),
			catchError(error => {
				return of(false);
			})
		);
	}

	public getJREAccessible(): Observable<boolean> {
		return this.getPageAccessible('PN118DREJRE');
	}

	public getConseilsPersoAccessible(): Observable<boolean> {
		return this.getPageAccessible('DREusager');
	}
}
