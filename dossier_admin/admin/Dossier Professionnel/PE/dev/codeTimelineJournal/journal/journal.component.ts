import {Component, OnInit} from '@angular/core';
import {INavigation, NavigationService, navLink} from '@pe-angular-communs/candidat-layout';
import {ModalAideJournalComponent} from '../journal/modal-aide-journal/modal-aide-journal.component';
import {configModal, ICoordonnees, IInformationsConseiller} from '../types/pe-types';
import {DataTag, TmsService} from '@pe-angular-communs/tms';
import {BsModalRef, BsModalService} from 'pe-ngx-bootstrap';
import {ErreurMajeur, LoggerService} from '@pe-angular-communs/logger';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
// import {IndividuService} from '../services/services/individu.service';
// import {CoordonneesUtilsService} from '../services/services/coordonnees-utils.service';
// import {Observable} from 'rxjs';
// import {catchError, tap} from 'rxjs/operators';
// import {PiloteService} from '../services/services/pilote.service';
import { AccesUtilisateurService } from 'app/services/services/acces-utilisateur.service';

@Component({
	selector: 'app-journal',
	templateUrl: './journal.component.html'
})
export class JournalComponent implements OnInit {
	// Variables pour gérer l'affichage propre de la page
	// isDE: boolean = false;
	// appelEx040OK: boolean = false;
	pageReady: boolean = false;

	// Navigation dans la subnav et le fil d'ariane
	navigationLinks: navLink[] = Array.of({
		url: '/journal',
		label: "Mon journal de recherche d'emploi",
		current: true
	});

	// Gestion des modales pour permettre l'accessibilité
	modalAide: BsModalRef;

	constructor(
		private modalService: BsModalService,
		private tmsService: TmsService,
		private titleService: Title,
		private accesUtilisateurService: AccesUtilisateurService,
		private loggerService: LoggerService,
		private router: Router,
		// private individuService: IndividuService,
		// private piloteService: PiloteService,
		// private navigationService: NavigationService
	) {}

	ngOnInit() {
		//appel au code saphir
      this.titleService.setTitle("Mon journal de recherche d'emploi | Pôle emploi");

      this.accesUtilisateurService.getJREAccessible().subscribe(
         (isJREAccessible: boolean) => {
            if(isJREAccessible){
               this.pageReady = true;
            }else{
               this.loggerService.debug('Pilote PN118DREJRE fermé');
					this.router.navigate(['/indisponible'], {queryParams: {from: 'journalretouremploi'}});
            }
         }
         );
      
      /* 
		this.navigationService.lire().subscribe(
			(navigationData: INavigation) => {
				if (!navigationData.typo || navigationData.typo.startsWith('C')) {
					this.loggerService.debug('Accès refusé à un candidat');
					this.router.navigate(['/indisponible'], {queryParams: {from: 'journalretouremploi'}});
				}
				this.isDE = true;
			},
			err => {
				this.loggerService.debug('Service navigation indisponible : {}', err.messageErreur);
				this.router.navigate(['/indisponible'], {queryParams: {from: 'journalretouremploi'}});
			}
		); */

		/* this.individuService.getCodeSaphir().subscribe(
			(informationsConseiller: IInformationsConseiller) => {
				if (informationsConseiller.agence && informationsConseiller.agence.codeSaphir) {
					this.verificationPilote(informationsConseiller.agence.codeSaphir);
				} else {
					this.verificationDepuisAdresse();
				}
			},
			error => {
				this.verificationDepuisAdresse();
			}
		); */
	}

	// ---------------------------------------------------------//
	//      Gestion de l'affichage des différentes modales      //
	// ---------------------------------------------------------//

	public openModalAide() {
		this.modalAide = this.modalService.show(ModalAideJournalComponent, {
			...configModal
		});
		this.modalAide.content.getFocusOnFermer();

		const dataTagClic: DataTag = {
			chapters: ['JRE'],
			name: 'Popin_Aide',
			type: 'navigation'
		};
		this.tmsService.tag(dataTagClic);

		const dataTagPage: DataTag = {
			chapters: ['JRE'],
			name: 'Popin_Aide',
			type: 'page'
		};
		this.tmsService.tag(dataTagPage);
	}

	/* public isPageReady() {
		return this.isDE && this.appelEx040OK;
	} */

	/* private verificationPilote(code) {
		let codeDepartement = CoordonneesUtilsService.recupererDepartementDepuisCodePostal(code);
		this.creerObservablePilote(codeDepartement).subscribe((valuePilote: boolean) => {
			if (valuePilote) {
				const dataTagPage: DataTag = {
					chapters: ['JRE'],
					name: 'Liste_demarches',
					type: 'page'
				};
				this.tmsService.tag(dataTagPage);

				this.appelEx040OK = true;
			}
		});
	}

	private verificationDepuisAdresse() {
		this.individuService.getCoordonneesIndividu().subscribe(
			(coordonnees: ICoordonnees) => {
				this.verificationPilote(coordonnees.codePostal);
			},
			error => {
				throw new ErreurMajeur("Erreur de récupération des coordonnées de l'individu : " + error ? error.message : '');
			}
		);
	}

	private creerObservablePilote(departement: string): Observable<any> {
		return this.piloteService.getEtatPilote(departement, 'EPE', 'PN118DREJRE').pipe(
			tap(value => {
				if (!value) {
					this.loggerService.debug('Pilote PN118DREJRE fermé');
					this.router.navigate(['/indisponible'], {queryParams: {from: 'journalretouremploi'}});
				}
			}),
			catchError(error => {
				throw new ErreurMajeur('Erreur de récupération du pilote dreusager : ' + error ? error.message : '');
			})
		);
	} */
}
