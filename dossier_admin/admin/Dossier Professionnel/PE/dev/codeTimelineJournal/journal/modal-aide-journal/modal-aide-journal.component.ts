import {Component, ElementRef, ViewChild} from '@angular/core';
import {BsModalRef} from 'pe-ngx-bootstrap';

@Component({
	selector: 'app-modal-aide-journal',
	templateUrl: './modal-aide-journal.component.html'
})
export class ModalAideJournalComponent {
	// Variables pour initialiser les objets présents dans la page
	@ViewChild('boutonFermer') boutonFermer: ElementRef;

	constructor(public modalAide: BsModalRef) {}

	public getFocusOnFermer(): void {
		this.boutonFermer.nativeElement.focus();
	}
}
