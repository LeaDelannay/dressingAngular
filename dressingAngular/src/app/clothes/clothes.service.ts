import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Clothe } from './clothe';

@Injectable({
   providedIn: 'root'
})
export class ClothesService {

   private baseUrl:string = "http://localhost:3000/api";

   constructor(public http: HttpClient) { }

   //récupère la liste de tous les vêtements en base de données
   public getAllClothes(): Observable<Clothe[]> {
      return this.http.get<Clothe[]>(`${this.baseUrl}/clothes`);
   }

   //récupère la liste de toutes les caracteristiques en base de données
   public getAllCaracteristiques(): Observable<any[]> {
      return this.http.get<any[]>(`${this.baseUrl}/caracteristiques`);
   }

}
