import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {JournalComponent} from './journal.component';
import {EcheancePasseeComponent} from './echeance-passee/echeance-passee.component';
import {TimelineComponent} from './timeline/timeline.component';
import {ModalVoletJournalComponent} from './modal-volet-journal/modal-volet-journal.component';
import {CandidatLayoutModule} from '@pe-angular-communs/candidat-layout';
import {IndisponibleModule} from '../indisponible/indisponible.module';
import {ModalAideJournalComponent} from './modal-aide-journal/modal-aide-journal.component';
import {AjouterDemarcheComponent} from './ajouter-demarche/ajouter-demarche.component';
import {RouterModule} from '@angular/router';

@NgModule({
	imports: [RouterModule, CommonModule, CandidatLayoutModule.forChild(), IndisponibleModule],
	declarations: [
		JournalComponent,
		EcheancePasseeComponent,
		TimelineComponent,
		ModalVoletJournalComponent,
		ModalAideJournalComponent,
		AjouterDemarcheComponent
	],
	entryComponents: [ModalVoletJournalComponent, ModalAideJournalComponent]
})
export class JournalModule {}
