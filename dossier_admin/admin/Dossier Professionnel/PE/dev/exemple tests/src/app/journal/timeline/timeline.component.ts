import {Component, OnInit, Renderer2} from '@angular/core';
import {BsModalRef, BsModalService} from 'pe-ngx-bootstrap';
import {ModalVoletJournalComponent} from '../modal-volet-journal/modal-volet-journal.component';
import {configModal} from '../../types/pe-types';
import {IDemarche, Timeline} from '../../types/demarche-types';
import {DemarcheService} from '../../services/services/demarche.service';
import {ErreurMineur} from '@pe-angular-communs/logger';

@Component({
	selector: 'app-timeline',
	templateUrl: './timeline.component.html'
})
export class TimelineComponent implements OnInit {
	// Gestion de la modale pour permettre l'accessibilité
	modalVoletJournal: BsModalRef;
	skeletonIterator: any[] = Array(3);

	chargementEnCours = true;
	hasErreur = false;
	timeline: Timeline;

	datesDemarches: Date[];
	today: Date;

	constructor(
		private modalService: BsModalService,
		private renderer: Renderer2,
		private demarcheService: DemarcheService
	) {}

	ngOnInit() {
		this.demarcheService.getTimeline().subscribe(
			(timeline: Timeline) => {
				this.chargementEnCours = false;
				this.timeline = timeline;
			},
			(erreur: Error) => {
				this.hasErreur = true;
				this.chargementEnCours = false;
				throw new ErreurMineur('Impossible de charger les démarches de la timeline : ' + erreur.message);
			}
		);
	}

	// ---------------------------------------------------------//
	//      Gestion de l'affichage des différentes modales      //
	// ---------------------------------------------------------//

	openModalVoletJournal() {
		this.modalVoletJournal = this.modalService.show(ModalVoletJournalComponent, {...configModal});
		this.modalVoletJournal.content.setVisible(true);
		this.renderer.addClass(document.body, 'modal-details-open');
		document.getElementsByClassName('modal')[1].setAttribute('class', 'modal modal-details modal-conseil modal-action');
	}

	getClassEcheance(demarche: IDemarche): string {
		switch (demarche.pourquoi.code) {
			case 'P01':
				return 'competences';
			case 'P02':
				return 'formation';
			case 'P03':
				return 'candidatures';
			case 'P04':
				return 'entretiens';
			case 'P05':
				return 'entreprise';
			default:
				return '';
		}
	}

	getClassEcheanceDepassee(demarche: IDemarche): string {
		if (demarche.echeanceDepassee) {
			return 'outdated';
		}
		return '';
	}

	getClassEtatDemarche(demarche: IDemarche): string {
		switch (demarche.etat.code) {
			case 'EC':
				return 'todo';
			case 'RE':
				return 'done';
			case 'AN':
				return 'cancelled';
			default:
				return '';
		}
	}

	isDemarcheModifiable(demarche: IDemarche): boolean {
		return demarche.origineDemarche === 'JRE_CONSEILLER' || demarche.origineDemarche === 'JRE_DE';
	}

	isAffichageMessageNonModifiable(demarche: IDemarche): boolean {
		return !this.isDemarcheModifiable(demarche) && demarche.etat.code !== 'AN' && demarche.etat.code !== 'RE';
	}

	isAffichageLAvezVousFait(demarche: IDemarche): boolean {
		return this.isDemarcheModifiable(demarche) && demarche.etat.code !== 'AN' && demarche.etat.code !== 'RE';
	}

	isAffichageBoutonNon(demarche: IDemarche): boolean {
		return demarche.origineDemarche === 'JRE_DE' && demarche.etat.code !== 'AN' && demarche.etat.code !== 'RE';
	}
}
