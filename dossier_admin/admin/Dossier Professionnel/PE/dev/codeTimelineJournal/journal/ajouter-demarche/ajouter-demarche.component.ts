import {Component, OnInit} from '@angular/core';
import {navLink} from '@pe-angular-communs/candidat-layout';
import {BsModalRef, BsModalService} from 'pe-ngx-bootstrap';
import {DataTag, TmsService} from '@pe-angular-communs/tms';
import {ModalAideJournalComponent} from '../modal-aide-journal/modal-aide-journal.component';
import {configModal} from '../../types/pe-types';

@Component({
	selector: 'app-ajouter-demarche',
	templateUrl: './ajouter-demarche.component.html'
})
export class AjouterDemarcheComponent {
	// Navigation dans la subnav et le fil d'ariane
	navigationLinks: navLink[] = Array.of({
		url: '/journal',
		label: "Mon journal de recherche d'emploi",
		current: true
	});

	// Gestion des modales pour permettre l'accessibilité
	modalAide: BsModalRef;

	constructor(private modalService: BsModalService, private tmsService: TmsService) {}

	// ---------------------------------------------------------//
	//      Gestion de l'affichage des différentes modales      //
	// ---------------------------------------------------------//

	public openModalAide() {
		this.modalAide = this.modalService.show(ModalAideJournalComponent, {
			...configModal
		});
		this.modalAide.content.getFocusOnFermer();

		const dataTagClic: DataTag = {
			chapters: ['Journal'],
			name: 'Popin_Aide',
			type: 'navigation'
		};
		this.tmsService.tag(dataTagClic);

		const dataTagPage: DataTag = {
			chapters: ['Journal'],
			name: 'Popin_Aide',
			type: 'page'
		};
		this.tmsService.tag(dataTagPage);
	}
}
