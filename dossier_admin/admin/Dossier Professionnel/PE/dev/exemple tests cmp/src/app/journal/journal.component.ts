import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {navLink} from '@pe-angular-communs/candidat-layout';
import {LoggerService} from '@pe-angular-communs/logger';
import {DataTag, TmsService} from '@pe-angular-communs/tms';
import {AccesUtilisateurService} from 'app/services/services/acces-utilisateur.service';
import {BsModalRef, BsModalService} from 'pe-ngx-bootstrap';
import {ModalAideJournalComponent} from '../journal/modal-aide-journal/modal-aide-journal.component';
import {configModal} from '../types/pe-types';

@Component({
	selector: 'app-journal',
	templateUrl: './journal.component.html'
})
export class JournalComponent implements OnInit {
	// Variables pour gérer l'affichage propre de la page
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
		private router: Router
	) {}

	ngOnInit() {
		this.titleService.setTitle("Mon journal de recherche d'emploi | Pôle emploi");

		//vérifie que la page est accessible
		this.accesUtilisateurService.getJREAccessible().subscribe((isJREAccessible: boolean) => {
			if (isJREAccessible) {
				this.pageReady = true;
				const dataTagPage: DataTag = {
					chapters: ['JRE'],
					name: 'Liste_demarches',
					type: 'page'
				};
				this.tmsService.tag(dataTagPage);
			} else {
				this.loggerService.debug('Pilote PN118DREJRE fermé');
				this.router.navigate(['/indisponible'], {queryParams: {from: 'journalretouremploi'}});
			}
		});
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
}
