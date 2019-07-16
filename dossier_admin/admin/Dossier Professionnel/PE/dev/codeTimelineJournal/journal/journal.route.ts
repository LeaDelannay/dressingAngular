import {Routes} from '@angular/router';
import {JournalComponent} from './journal.component';
import {AjouterDemarcheComponent} from './ajouter-demarche/ajouter-demarche.component';

export const journalRoutes: Routes = [
	{path: 'journal', component: JournalComponent},
	{path: 'journal/ajouter', component: AjouterDemarcheComponent}
];
