import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';/* Import des routes */
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NavbarComponent } from './shared/navbar/navbar.component';
import { ClothesListComponent } from './clothes/clothes-list/clothes-list.component';
import { HomepageComponent } from './homepage/homepage.component';

const appRoutes: Routes = [/* Toutes les routes des composants */
   { path: 'homepage', component: HomepageComponent },
   { path: 'clothes-list', component: ClothesListComponent }
   // {path: 'outfit-list', component: OutfitListComponent},
   // {path: 'create-clothe', component: CreateClotheComponent},
   // {path: 'create-outfit', component: CreateOutfitComponent},
   // {path: 'weather', component: WeatherComponent},
   // {path: 'login', component: LoginComponent}
]

@NgModule({
   declarations: [
      AppComponent,
      ClothesListComponent,
      NavbarComponent,
      HomepageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule, /* Routes */
      RouterModule.forRoot(appRoutes), /* Routes */
      FormsModule, /* Formulaires */
      HttpClientModule, /* Pour se connecter au serveur */
      NgbModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
