import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {navLink} from '@pe-angular-communs/candidat-layout';
import {LoggerService} from '@pe-angular-communs/logger';
import {DataTag, TmsService} from '@pe-angular-communs/tms';
import {AccesUtilisateurService} from 'app/services/services/acces-utilisateur.service';
import {BsModalRef, BsModalService} from 'pe-ngx-bootstrap';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {AppConfigurationToken} from '../configuration/app-configuration.token';
import {IConfiguration} from '../configuration/configuration';
import {SuggestionsService} from '../services/services/suggestions.service';
import {
	configModal,
	IEventPaginationSuggestion,
	IEventSuppressionSuggestion,
	IIndexEtListe,
	ISuggestion
} from '../types/pe-types';
import {ModalAideSuggestionsComponent} from './modal-aide-suggestions/modal-aide-suggestions.component';
import {ModalRefuserSuggestionComponent} from './modal-refuser-suggestion/modal-refuser-suggestion.component';
import {ModalVoletSuggestionComponent} from './modal-volet-suggestion/modal-volet-suggestion.component';

@Component({
	selector: 'app-suggestions',
	templateUrl: './suggestions.component.html'
})
export class SuggestionsComponent implements OnInit {
	// Variables pour gérer l'affichage propre de la page
	appelEx029OK: boolean = false;
	erreurSuggestions: boolean = false;
	afficherPage: boolean = false;

	// Navigation dans la subnav et le fil d'ariane
	navigationLinks: navLink[] = Array.of({
		url: '/conseils-personnalises',
		label: 'Mes conseils personnalisés',
		current: true
	});

	// Gestion des modales pour permettre l'accessibilité
	modalVolet: BsModalRef;
	modalRefus: BsModalRef;
	modalAide: BsModalRef;

	// Initialisation de la liste des suggestions
	suggestions: ISuggestion[] = [];

	// ---------------------------------------------------------//
	//               Constructeur et initialisation             //
	// ---------------------------------------------------------//

	constructor(
		@Inject(AppConfigurationToken) public appConfiguration: IConfiguration,
		private loggerService: LoggerService,
		private modalService: BsModalService,
		private tmsService: TmsService,
		private titleService: Title,
		private suggestionsService: SuggestionsService,
		private router: Router,
		private renderer: Renderer2,
		private accesUtilisateurService: AccesUtilisateurService
	) {}

	ngOnInit() {
		this.titleService.setTitle('Mes conseils personnalisés | Pôle emploi');
		//vérifie que la page est accessible
		this.accesUtilisateurService.getConseilsPersoAccessible().subscribe((isConseilsPersoAccessible: boolean) => {
			if (isConseilsPersoAccessible) {
				this.afficherPage = true;
				const dataTagPage: DataTag = {
					chapters: ['Conseils_personnalises'],
					name: 'Mes_conseils_personnalises',
					type: 'page'
				};
				this.tmsService.tag(dataTagPage);
			} else {
				this.loggerService.debug('Pilote DREusager fermé');
				this.router.navigate(['/indisponible'], {queryParams: {from: 'demarcheretouremploi'}});
			}
		});

		this.creerObservableListerSuggestions().subscribe();
	}

	// ---------------------------------------------------------//
	// Gestion des observables pour l'initialisation de la page //
	// ---------------------------------------------------------//

	private creerObservableListerSuggestions(): Observable<any> {
		return this.suggestionsService.getSuggestions().pipe(
			tap((liste: ISuggestion[]) => {
				this.suggestions = liste;
				this.appelEx029OK = true;
			}),
			catchError(error => {
				this.erreurSuggestions = true;
				return of(undefined);
			})
		);
	}

	// ---------------------------------------------------------//
	//         Méthode pour le bon affichage de la page         //
	// ---------------------------------------------------------//

	public cssUnread(codeEtat: string): string {
		return codeEtat === 'N' ? 'unread' : 'read';
	}

	public handleOnHide() {
		this.renderer.removeClass(document.body, 'modal-details-open');
	}

	public appelServiceAcceder(id: string): void {
		for (let sugg of this.suggestions) {
			if (sugg.idSuggestion === id) sugg.codeEtat = 'L';
		}
		this.suggestionsService.acceder([id]).subscribe();
	}

	public isPageReady() {
		return this.afficherPage && this.appelEx029OK && !this.erreurSuggestions;
	}

	private tagPageDetailSuggestion(): void {
		const dataTagPage: DataTag = {
			chapters: ['Conseils_personnalises'],
			name: 'Detail_conseil',
			type: 'page'
		};
		this.tmsService.tag(dataTagPage);
	}

	// ---------------------------------------------------------//
	//      Gestion de l'affichage des différentes modales      //
	// ---------------------------------------------------------//

	public afficherVoletDetail(suggestion: ISuggestion) {
		this.modalVolet = this.modalService.show(ModalVoletSuggestionComponent, {...configModal});
		this.modalVolet.content.setVisible(true);
		this.modalVolet.content.onClicPaginationEvent.subscribe((event: IEventPaginationSuggestion) => {
			this.onClicPagination(event);
		});
		this.modalVolet.content.onAfficherPopinSuppressionEvent.subscribe((event: IEventSuppressionSuggestion) => {
			this.afficherPopinSuppression(event.suggestion);
		});
		this.miseAJourVoletDetail(suggestion);
		this.renderer.addClass(document.body, 'modal-details-open');
		document.getElementsByClassName('modal')[1].setAttribute('class', 'modal modal-details modal-conseil');
	}

	public afficherPopinSuppression(suggestion: ISuggestion) {
		this.modalRefus = this.modalService.show(ModalRefuserSuggestionComponent, {
			...configModal
		});
		this.modalRefus.content.init(suggestion);
		this.modalRefus.content.onSuppressionSuggestion.subscribe((event: IEventSuppressionSuggestion) => {
			const index: number = this.suggestions.indexOf(event.suggestion);
			if (index !== -1) {
				this.suggestions.splice(index, 1);
				if (this.modalVolet && this.modalVolet.content.isVisible()) {
					this.renderer.removeClass(document.body, 'modal-details-open');
					this.modalVolet.content.setVisible(false);
					this.modalVolet.hide();
				}
			}
		});
		this.renderer.addClass(document.body, 'modal-details-open');
	}

	public openModalAide() {
		this.modalAide = this.modalService.show(ModalAideSuggestionsComponent, {
			...configModal
		});
		this.modalAide.content.getFocusOnFermer();

		const dataTagClic: DataTag = {
			chapters: ['Conseils_personnalises'],
			name: 'Popin_Aide',
			type: 'navigation'
		};
		this.tmsService.tag(dataTagClic);

		const dataTagPage: DataTag = {
			chapters: ['Conseils_personnalises'],
			name: 'Popin_Aide',
			type: 'page'
		};
		this.tmsService.tag(dataTagPage);
	}

	private onClicPagination(event: IEventPaginationSuggestion) {
		const identifiantSuggestionInitiale: string = event.suggestionEnCours;
		const suivant: boolean = event.suivant;
		let indexNouvelleSuggestion: number;
		let nouvelleSuggestion: ISuggestion;

		// Recherche de la suggestion dans la liste
		const listeIndex: IIndexEtListe = this.trouverSuggestionEtListeIndex(identifiantSuggestionInitiale);
		if (listeIndex) {
			if (suivant) {
				indexNouvelleSuggestion = listeIndex.index + 1;
			} else {
				indexNouvelleSuggestion = listeIndex.index - 1;
			}
			if (indexNouvelleSuggestion >= 0 && indexNouvelleSuggestion < listeIndex.liste.length) {
				nouvelleSuggestion = listeIndex.liste[indexNouvelleSuggestion];
			}
			if (nouvelleSuggestion) {
				this.miseAJourVoletDetail(nouvelleSuggestion);
			} else {
				this.loggerService.info(
					'Nouvelle suggestion non trouvée',
					identifiantSuggestionInitiale,
					suivant,
					this.suggestions
				);
			}
		} else {
			this.loggerService.warn('Suggestion initiale non trouvée', identifiantSuggestionInitiale, this.suggestions);
		}
	}

	private miseAJourVoletDetail(suggestion: ISuggestion) {
		// Tag de page
		this.tagPageDetailSuggestion();
		const listeIndex: IIndexEtListe = this.trouverSuggestionEtListeIndex(suggestion.idSuggestion);
		this.modalVolet.content.init(suggestion, listeIndex);
		// Marquer la suggestion comme lue
		if (suggestion.codeEtat == 'N') suggestion.codeEtat = 'L';

		this.suggestionsService.lire([suggestion.idSuggestion]).subscribe(
			retour => {
				this.loggerService.debug('Envoi de l\'évenement "Lecture" sur la suggestion ' + suggestion.idSuggestion);
			},
			err => {
				this.loggerService.debug('Erreur lors de l\'évenement "Lecture" sur la suggestion ' + suggestion.idSuggestion);
			}
		);
	}

	// ---------------------------------------------------------//
	//                    Utils de la page                      //
	// ---------------------------------------------------------//

	private trouverSuggestionEtListeIndex(identifiantSuggestionInitiale: string): IIndexEtListe {
		let suggestionTrouvee: boolean = false;
		let index: number = 0;
		for (let sugg of this.suggestions) {
			if (sugg.idSuggestion === identifiantSuggestionInitiale) {
				suggestionTrouvee = true;
				break;
			}
			index++;
		}
		if (suggestionTrouvee) {
			return {liste: this.suggestions, index: index};
		} else {
			return {liste: this.suggestions, index: undefined};
		}
	}
}
