import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
CabinetsUrl:string ='http://localhost:8080/cabinets';
  constructor(private http:HttpClient) { }
  getAllCabinets():Observable<any>{
   return  this.http.get(this.CabinetsUrl);
  }
  getCabinetById(id:any){
   return this.http.get(`${this.CabinetsUrl}/${id}`);
  }
  addCabinet(cabinet:any): Observable<any>{
    return this.http.post(this.CabinetsUrl,cabinet);
  }
  searchCabinetByAdresse(adresse:any): Observable<any>{
  return this.http.get(`${this.CabinetsUrl}/searchadr?adresse=${adresse}`);
  }   
}
