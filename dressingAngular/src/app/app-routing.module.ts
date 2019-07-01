import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; /* Import des routes */
import { ClothesListComponent, ClotheCreateComponent, ClotheUpdateComponent } from './clothes';
import { HomepageComponent } from './home/homepage/homepage.component';
import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { RegisterComponent } from './account/register/register.component';

const routes: Routes = [
   /* Toutes les routes des composants */
   { path: "", component: HomepageComponent, pathMatch : "full", canActivate: [AuthGuard] }, //pathmatch recherche sur tout
   { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] },
   { path: 'clothes-list', component: ClothesListComponent, canActivate: [AuthGuard] },
   { path: 'clothe-create', component: ClotheCreateComponent, canActivate: [AuthGuard] },
   { path: 'clothe-update/:idClothe', component: ClotheUpdateComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent },

   { path: "**", component: LoginComponent } //toujours le mettre en dernier, gestion d'une erreur de path, default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
