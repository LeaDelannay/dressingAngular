import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ClothesService } from '../clothes.service';
import { Clothe } from '../clothe';

@Component({
  selector: 'app-clothe-detail',
  templateUrl: './clothe-detail.component.html',
  styleUrls: ['./clothe-detail.component.css']
})
export class ClotheDetailComponent implements OnInit {

   @Input() idClothe; //contient l'id du vêtement cliqué dans clothe-list
   clotheDetail : Clothe[] = []; //récupère le contenu renvoyé par le back
   erreur = null; //Création de la variable erreur pour afficher message d'erreur dans le html

   constructor(public activeModal: NgbActiveModal, private service: ClothesService) { }

  ngOnInit() {
   this.service.getSpecificClothe(this.idClothe).subscribe(response => {
      this.clotheDetail = response.body;
      // console.log(JSON.stringify(specificFeatureFromService));
      this.erreur = response.status;
   },
      error => {
         this.erreur = error.status; //Récupère la réponse du serveur (erreur) et l'insère dans erreur
         console.log("Erreur lors de l'appel au service clothes.service - specificFilterOpt -- " + error);
      });
  }

  onEdit(){
   console.log(this.idClothe);
  }

  onDelete(){

  }
  
}
