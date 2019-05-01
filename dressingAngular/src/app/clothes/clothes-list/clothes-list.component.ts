import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-clothes-list',
   templateUrl: './clothes-list.component.html',
   styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {
   clothes: any[] = [
      { "name": "clothe1", "imageUrl": "assets/pictures/tshirt.png", "caracteristique" : "moulant", "couleur" : "noir", "categorie" : "pull", "marque" : "ftp", "occasion" : "soirée" },
      { "name": "clothe2", "imageUrl": "assets/pictures/tshirt.png", "caracteristique" : "ample", "couleur" : "bleu", "categorie" : "tshirt", "marque" : "Roxy", "occasion" : "décontracté" },
      { "name": "clothe3", "imageUrl": "assets/pictures/tshirt.png", "caracteristique" : "leger", "couleur" : "rouge", "categorie" : "pantalon", "marque" : "ftp", "occasion" : "travail" },
      { "name": "clothe4", "imageUrl": "assets/pictures/tshirt.png", "caracteristique" : "chaud", "couleur" : "rouge", "categorie" : "pull", "marque" : "Véro Moda", "occasion" : "grandes occasions" },
      { "name": "clothe5", "imageUrl": "assets/pictures/tshirt.png", "caracteristique" : "moulant", "couleur" : "noir", "categorie" : "tshirt", "marque" : "Véro Moda", "occasion" : "dimanche" },
      { "name": "clothe6", "imageUrl": "assets/pictures/tshirt.png", "caracteristique" : "ample", "couleur" : "rouge", "categorie" : "pull", "marque" : "ftp", "occasion" : "soirée" },
      { "name": "clothe7", "imageUrl": "assets/pictures/tshirt.png", "caracteristique" : "leger", "couleur" : "bleu", "categorie" : "pantalon", "marque" : "Roxy", "occasion" : "décontracté" },
      { "name": "clothe8", "imageUrl": "assets/pictures/tshirt.png", "caracteristique" : "chaud", "couleur" : "bleu", "categorie" : "pantalon", "marque" : "Roxy", "occasion" : "travail" },
      { "name": "clothe9", "imageUrl": "assets/pictures/tshirt.png", "caracteristique" : "moulant", "couleur" : "noir", "categorie" : "tshirt", "marque" : "ftp", "occasion" : "dimanche" }
   ];

   constructor() { }

   ngOnInit() {
   }

}
