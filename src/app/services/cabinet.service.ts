import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cabinet } from '../Models/cabinet';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {
CabinetsUrl:string ='http://localhost:8080/cabinets';

  constructor(private http:HttpClient) { }
  ajouterCabinet(cabinetData: Cabinet): Observable<any> {
    return this.http.post<Cabinet>(`${this.CabinetsUrl}/ajout`, cabinetData);
  }
  addCabinet(cabinet:FormData): Observable<any>{
    return this.http.post(this.CabinetsUrl,cabinet);
  }

  getAllCabinets(): Observable<Cabinet[]> {
    return this.http.get<Cabinet[]>(`${this.CabinetsUrl}/all`);
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
 
  
  }
  

