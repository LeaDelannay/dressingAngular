import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; /* Import des routes */
import { ClothesListComponent } from './clothes/clothes-list/clothes-list.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ClotheCreateComponent } from './clothes/clothe-create/clothe-create.component';

const routes: Routes = [
   /* Toutes les routes des composants */
   { path: 'homepage', component: HomepageComponent },
   { path: 'clothes-list', component: ClothesListComponent },
   { path: 'clothe-create', component: ClotheCreateComponent }
   // { path: 'outfit-list', component: OutfitListComponent },
   // { path: 'outfit-create', component: OutfitCreateComponent },
   // { path: 'weather', component: WeatherComponent },
   // { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
