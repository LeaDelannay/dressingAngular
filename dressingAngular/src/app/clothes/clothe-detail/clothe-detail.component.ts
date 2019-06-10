import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClothesService } from '../clothes.service';
import { Clothe } from '../clothe';
import { Router } from '@angular/router';

@Component({
   selector: 'app-clothe-detail',
   templateUrl: './clothe-detail.component.html',
   styleUrls: ['./clothe-detail.component.css']
})
export class ClotheDetailComponent implements OnInit {

   @Input() idClothe; //contient l'id du vêtement cliqué dans clothe-list
   clotheDetail: Clothe[] = []; //récupère le contenu renvoyé par le back
   statusCode = null; //Création de la variable statusCode pour afficher message d'erruer dans le html

   constructor(public activeModal: NgbActiveModal, private service: ClothesService, public router: Router) { }

   ngOnInit() {
      this.service.getSpecificClothe(this.idClothe).subscribe(response => {
         this.clotheDetail = response.body;
         // console.log(JSON.stringify(specificFeatureFromService));
         this.statusCode = response.status;
      },
         error => {
            this.statusCode = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans statusCode
            console.log("Erreur lors de l'appel au service clothes.service - specificFilterOpt -- " + error);
         });
   }

   onEdit() {
      console.log(this.idClothe);
   }

   onDelete() {
      this.service.deleteClothe(this.idClothe).subscribe(response => { //Supprime la classe dans la BDD selon l'id
         this.statusCode = response.status;
         console.log("Le vêtement a bien été supprimé");
         this.activeModal.close();
      },
         error => {
            this.statusCode = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans statusCode
            console.log(error);
            console.log("Le vêtement n'a pas été supprimé - Erreur lors de l'appel au service" + this.statusCode);
         })
   }

}
