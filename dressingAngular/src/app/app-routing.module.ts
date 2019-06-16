import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; /* Import des routes */
import { ClothesListComponent, ClotheCreateComponent, ClotheUpdateComponent } from './clothes';
import { HomepageComponent } from './home/homepage/homepage.component';

const routes: Routes = [
   /* Toutes les routes des composants */
   { path: 'homepage', component: HomepageComponent },
   { path: 'clothes-list', component: ClothesListComponent },
   { path: 'clothe-create', component: ClotheCreateComponent },
   { path: 'clothe-update', component: ClotheUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
