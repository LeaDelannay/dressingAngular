import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; /* Import des routes */
import { ClothesListComponent } from './clothes/clothes-list/clothes-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
   /* Toutes les routes des composants */
   { path: 'homepage', component: HomepageComponent },
   { path: 'clothes-list', component: ClothesListComponent }
   // {path: 'outfit-list', component: OutfitListComponent},
   // {path: 'create-clothe', component: CreateClotheComponent},
   // {path: 'create-outfit', component: CreateOutfitComponent},
   // {path: 'weather', component: WeatherComponent},
   // {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
