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
   caracteristiques: any[] = [];
   selectedCarac: string = "";

   //injection de dépendance de mon service ClothesService
   constructor(private service: ClothesService) { }

   ngOnInit() {
      this.service.getAllClothes().subscribe(clothesFromService => {
         this.clothes = clothesFromService;
         console.log(JSON.stringify(clothesFromService));
      },
      error =>{
         console.log("Erreur lors de l'appel au service clothes.service -- "+ error);
      });

      this.service.getAllCaracteristiques().subscribe(caractFromService => {
         this.caracteristiques = caractFromService;
         console.log(JSON.stringify(caractFromService));
      },
      error =>{
         console.log("Erreur lors de l'appel au service clothes.service -- "+ error);
      });
   }


}
