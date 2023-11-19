import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
CabinetsUrl:string ='http://localhost:8080/cabinets';
  constructor(private http:HttpClient) { }


  addCabinet(cabinet:FormData): Observable<any>{
    return this.http.post(this.CabinetsUrl,cabinet);
  }

  getAllCabinets():Observable<any>{
   return  this.http.get(this.CabinetsUrl);
  }
  getCabinetById(id:any){
   return this.http.get(`${this.CabinetsUrl}/${id}`);
  }
  
  searchCabinetByAdresse(adresse:any): Observable<any>{
  return this.http.get(`${this.CabinetsUrl}/searchadr?adresse=${adresse}`);
  }   
  deleteCabinet(id:any):Observable<any>{
    return this.http.delete(`${this.CabinetsUrl}/${id}`);
  }
  ajouterHoraireTravailAuCabinet(cabinetId: number, horaireTravail: any): Observable<any> {
    const url = `${this.CabinetsUrl}/${cabinetId}/ajouter-horaire`;
    return this.http.post<any>(url, horaireTravail);
  }
  
}
