import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HorTravailService {
  private apiUrl:string = 'http://localhost:8080/horaires';

  constructor(private http: HttpClient) {}

  getHoraires(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getHoraireTravailByCabinetId(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  addHoraire(horaire: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, horaire);
  }

  updateHoraire(id: number, horaire: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, horaire);
  }

  deleteHoraire(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  } 
  
}
