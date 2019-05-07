import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { NavbarComponent } from './shared/navbar/navbar.component';
import { ClothesListComponent } from './clothes/clothes-list/clothes-list.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { ClotheCreateComponent } from './clothes/clothe-create/clothe-create.component';

@NgModule({
   declarations: [
      AppComponent,
      ClothesListComponent,
      NavbarComponent,
      HomepageComponent,
      ClotheCreateComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule, /* Routes */
      FormsModule, /* Formulaires */
      HttpClientModule, /* Pour se connecter au serveur */
      NgbModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
