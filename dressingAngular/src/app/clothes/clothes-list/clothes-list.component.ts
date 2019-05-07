import { Component, OnInit } from '@angular/core';
import { Clothe } from '../clothe';
import { ClothesService } from '../clothes.service';

@Component({
   selector: 'app-clothes-list',
   templateUrl: './clothes-list.component.html',
   styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {
   
   clothes: Clothe[] = [];
   erreur = null; //Création de la variable erreur pour afficher message d'erreur dans le html

   brands: any[] = [];
   categories: any[] = [];
   colors: any[] = [];
   features: any[] = [];
   occasions: any[] = [];

   _selectedFilter: string = ""; //correspond au [(ngModel)] du html. _obligatoire pour éviter boucle infinie
   _selectedOption: string = ""; //correspond au [(ngModel)] du html. _obligatoire pour éviter boucle infinie
   
   selectedBrand: string = "";
   selectedCateg: string = "";
   selectedCol: string = "";
   selectedFeat: string = "";
   selectedOccas: string = "";

   //injection de dépendance de mon service ClothesService
   constructor(private service: ClothesService) { }

   get selectedFilter():string{
      return this._selectedFilter;
   }
   set selectedFilter(selectedFilter:string){
      this._selectedFilter = selectedFilter;
      console.log(this._selectedFilter);
   }
   
   get selectedOption():string{
      return this._selectedOption;
   }
   set selectedOption(selectedOption:string){
      this._selectedOption = selectedOption;
      console.log(this._selectedOption);

      this.service.getSpecificFeature(this._selectedFilter, this._selectedOption).subscribe(response => {
         this.clothes = response.body;
         // console.log(JSON.stringify(specificFeatureFromService));
         this.erreur = response.status;
      },
      error =>{
         this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
         console.log("Erreur lors de l'appel au service clothes.service - specificFeature -- "+ error);
      });
   }

   ngOnInit() {
      this.service.getAllBrands().subscribe(response => {
         this.brands = response.body;
         // console.log(JSON.stringify(brandFromService));
         this.erreur = response.status;
      },
      error =>{
         this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
         console.log("Erreur lors de l'appel au service clothes.service - brands -- "+ error);
      });
      
      this.service.getAllCategories().subscribe(response => {
         this.categories = response.body;
         // console.log(JSON.stringify(categoryFromService));
         this.erreur = response.status;
      },
      error =>{
         this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
         console.log("Erreur lors de l'appel au service clothes.service - categories -- "+ error);
      });

      this.service.getAllClothes().subscribe(response => {
         this.clothes = response.body;
         // console.log(JSON.stringify(clothesFromService));
         this.erreur = response.status;
      },
      error =>{
         this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
         console.log("Erreur lors de l'appel au service clothes.service - clothes -- "+ error);
      });
      
      this.service.getAllColors().subscribe(response => {
         this.colors = response.body;
         // console.log(JSON.stringify(colorFromService));
         this.erreur = response.status;
      },
      error =>{
         this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
         console.log("Erreur lors de l'appel au service clothes.service - colors -- "+ error);
      });
  
      this.service.getAllFeatures().subscribe(response => {
         this.features = response.body;
         // console.log(JSON.stringify(featFromService));
         this.erreur = response.status;
      },
      error =>{
         this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
         console.log("Erreur lors de l'appel au service clothes.service - features -- "+ error);
      });
  
      this.service.getAllOccasions().subscribe(response => {
         this.occasions = response.body;
         // console.log(JSON.stringify(occasFromService));
         this.erreur = response.status;
      },
      error =>{
         this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
         console.log("Erreur lors de l'appel au service clothes.service - occasions -- "+ error);
      });

   } 


}
