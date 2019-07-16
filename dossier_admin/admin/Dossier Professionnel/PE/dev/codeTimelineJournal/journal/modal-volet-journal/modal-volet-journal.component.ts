import {Component, OnInit, Renderer2} from '@angular/core';
import {BsModalRef} from 'pe-ngx-bootstrap';

@Component({
	selector: 'app-modal-volet-journal',
	templateUrl: './modal-volet-journal.component.html'
})
export class ModalVoletJournalComponent {
	// Variable du volet
	visible: boolean;

	// ---------------------------------------------------------//
	//               Constructeur et initialisation             //
	// ---------------------------------------------------------//

	constructor(public modalVoletJournal: BsModalRef, private renderer: Renderer2) {}

	// ---------------------------------------------------------//
	//         Méthodes pour le bon affichage de la page        //
	// ---------------------------------------------------------//
	public handleOnHide() {
		this.renderer.removeClass(document.body, 'modal-details-open');
		this.visible = false;
		this.modalVoletJournal.hide();
	}

	public isVisible() {
		return this.visible;
	}

	public setVisible(visibilite: boolean) {
		this.visible = visibilite;
	}
}
