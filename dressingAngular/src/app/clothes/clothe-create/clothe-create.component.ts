import { Component, OnInit } from '@angular/core';
import { ClothesService } from '../clothes.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Clothe } from '../clothe';

@Component({
   selector: 'app-clothe-create',
   templateUrl: './clothe-create.component.html',
   styleUrls: ['./clothe-create.component.css']
})
export class ClotheCreateComponent implements OnInit {

   colorExists = true;
   featureExists = true;
   occasionExists = true;
   brandExists = true;
   categoryExists = true;

   erreur = null;

   brands: any[] = [];
   categories: any[] = [];
   colors: any[] = [];
   features: any[] = [];
   notes: any[] = [];
   occasions: any[] = [];

   constructor(private service: ClothesService, private router: Router) { }

   ngOnInit() {
      this.service.getAllBrands().subscribe(response => {
         this.brands = response.body;
         // console.log(JSON.stringify(brandFromService));
         this.erreur = response.status;
      },
         error => {
            this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
            console.log("Erreur lors de l'appel au service clothes.service - brands -- " + error);
         });

      this.service.getAllCategories().subscribe(response => {
         this.categories = response.body;
         // console.log(JSON.stringify(categoryFromService));
         this.erreur = response.status;
      },
         error => {
            this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
            console.log("Erreur lors de l'appel au service clothes.service - categories -- " + error);
         });
      this.service.getAllColors().subscribe(response => {
         this.colors = response.body;
         // console.log(JSON.stringify(colorFromService));
         this.erreur = response.status;
      },
         error => {
            this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
            console.log("Erreur lors de l'appel au service clothes.service - colors -- " + error);
         });
      this.service.getAllFeatures().subscribe(response => {
         this.features = response.body;
         // console.log(JSON.stringify(featFromService));
         this.erreur = response.status;
      },
         error => {
            this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
            console.log("Erreur lors de l'appel au service clothes.service - features -- " + error);
         });

      this.service.getAllNotes().subscribe(response => {
         this.notes = response.body;
         // console.log(JSON.stringify(occasFromService));
         this.erreur = response.status;
      },
         error => {
            this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
            console.log("Erreur lors de l'appel au service clothes.service - notes -- " + error);
         });

      this.service.getAllOccasions().subscribe(response => {
         this.occasions = response.body;
         // console.log(JSON.stringify(occasFromService));
         this.erreur = response.status;
      },
         error => {
            this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
            console.log("Erreur lors de l'appel au service clothes.service - occasions -- " + error);
         });

   }

   // permet de récupérer les valeurs des checkboxes
   get selectedColors(){
      return this.colors
            .filter(color => color.checked)
            .map(color => color.ID_COUL);
   }
   get selectedFeatures(){
      return this.features
            .filter(feature => feature.checked)
            .map(feature => feature.ID_CARACT);
   }
   get selectedOccasions(){
      return this.occasions
            .filter(occasion => occasion.checked)
            .map(occasion => occasion.ID_OCCAS);
   }


   onSubmit(form:NgForm){
      if (form.valid == true) { //Si tous les champs du formulaire sont remplis
         let clotheArray = new Clothe; //création d'un tableau Json contenant les données attendues par le serveur
         clotheArray.NOM_VET = form.value["clotheName"]; //met le nom du vetement saisi dans le formulaire, dans le tableau clotheArray
         clotheArray.FK_ID_CAT = form.value["clotheCategory"]; 
         clotheArray.FK_ID_MARQUE = form.value["clotheBrand"]; 
         clotheArray.FK_ID_NOTE = form.value["clotheNote"]; 
         clotheArray.DESCRIPT_VET = form.value["clotheDescr"]; 
         clotheArray.ID_CARACT = this.selectedFeatures;
         clotheArray.ID_COUL = this.selectedColors;
         clotheArray.ID_OCCAS = this.selectedOccasions;
         if(form.value["clotheImg"] == ""){
            clotheArray.IMG_VET = null;
         }else{
            clotheArray.IMG_VET = form.value["clotheImg"];
         }

         // clotheArray.FK_ID_USER = form.value["idUser"]; // a implémenter en fonction d'une session
         // console.log(clotheArray.FK_ID_USER); // a implémenter en fonction d'une session
         clotheArray.FK_ID_USER = 1; // a implémenter en fonction d'une session - en attendant par défaut : 1
         
         console.log(clotheArray);

         this.service.addNewClothe(clotheArray).subscribe(response => { //envoie le tableau au back
            this.erreur = response.status;
            console.log("Les requêtes ont bien été enregistrées");
            this.router.navigate(['homepage']);
         },
            error =>{
               this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
               console.log(error); //Affiche le retour du serveur
               console.log(this.erreur); //Affiche la variable erreur qui a été injectée par error.status
               console.log(" Les requêtes n'ont pas été enregistrées / Erreur lors de l'appel au service clothes.service - clothes -- " + error);
          });
      }
   }

   onClickColor(){
      this.colorExists = this.colorExists ? false : true;
   }
   onClickFeature(){
      this.featureExists = this.featureExists ? false : true;
   }
   onClickOccasion(){
      this.occasionExists = this.occasionExists ? false : true;
   }
   onClickBrand(){
      this.brandExists = this.brandExists ? false : true;
   }
   onClickCategory(){
      this.categoryExists = this.categoryExists ? false : true;
   }

}