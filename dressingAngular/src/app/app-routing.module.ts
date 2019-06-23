import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; /* Import des routes */
import { ClothesListComponent, ClotheCreateComponent, ClotheUpdateComponent } from './clothes';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './account/login/login.component';

const routes: Routes = [
   /* Toutes les routes des composants */
   { path: 'homepage', component: HomepageComponent },
   { path: 'clothes-list', component: ClothesListComponent },
   { path: 'clothe-create', component: ClotheCreateComponent },
   { path: 'clothe-update/:idClothe', component: ClotheUpdateComponent },
   { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
