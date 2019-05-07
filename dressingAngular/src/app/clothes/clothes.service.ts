import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Clothe } from './clothe';

@Injectable({
   providedIn: 'root'
})
export class ClothesService {

   private baseUrl:string = "http://localhost:3000/api";

   constructor(public http: HttpClient) { }

   //récupère la liste de toutes les marques en base de données
   //on ajoute l'option {observe:'response'} afin de retourner toute la http response et pas juste le body
   //pour cela, on ajoute HttpResponse à l'observable : l'observable est typé HttpResponse qui contient lui même un tableau de any
   public getAllBrands(): Observable<HttpResponse<any[]>> {
      return this.http.get<any[]>(`${this.baseUrl}/brands`, {observe: 'response'});
   }

   //récupère la liste de toutes les catégories en base de données
   public getAllCategories(): Observable<HttpResponse<any[]>> {
      return this.http.get<any[]>(`${this.baseUrl}/categories`, {observe: 'response'});
   }

   //récupère la liste de tous les vêtements en base de données
   public getAllClothes(): Observable<HttpResponse<Clothe[]>> {
      return this.http.get<Clothe[]>(`${this.baseUrl}/clothes`, {observe: 'response'});
   }

   //récupère la liste de toutes les couleurs en base de données
   public getAllColors(): Observable<HttpResponse<any[]>> {
      return this.http.get<any[]>(`${this.baseUrl}/colors`, {observe: 'response'});
   }

   //récupère la liste de toutes les caracteristiques en base de données
   public getAllFeatures(): Observable<HttpResponse<any[]>> {
      return this.http.get<any[]>(`${this.baseUrl}/features`, {observe: 'response'});
   }

   //récupère la liste de toutes les occasions en base de données
   public getAllOccasions(): Observable<HttpResponse<any[]>> {
      return this.http.get<any[]>(`${this.baseUrl}/occasions`, {observe: 'response'});
   }

   //récupère la liste des vetements contenant un filtre précis en base de données
   public getSpecificFilter(): Observable<HttpResponse<any[]>> {
      return this.http.get<any[]>(`${this.baseUrl}/clothes`, {observe: 'response'});
   }
   
   //récupère la liste des vetements contenant filtre et option précis en base de données
   public getSpecificFilterOpt(selectedFilter:string, selectedOption:string): Observable<HttpResponse<any[]>> {
      return this.http.get<any[]>(`${this.baseUrl}/${selectedFilter}/${selectedOption}`, {observe: 'response'});
   }
}
