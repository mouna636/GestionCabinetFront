import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  ConsultationUrl: string = 'http://localhost:8080/consultations';

  constructor(private httpClient: HttpClient) {}

  getConsultationById(id: any): Observable<any> {
    return this.httpClient.get(this.ConsultationUrl + '/' + id);
  }

  getAllConsultations(): Observable<any> {
    return this.httpClient.get(this.ConsultationUrl);
  }

  saveConsultation(consultation: any): Observable<any> {
    return this.httpClient.post(this.ConsultationUrl, consultation);
  }

  updateConsultation(id: number, consultation: any): Observable<any> {
    return this.httpClient.put(this.ConsultationUrl + '/' + id, consultation);
  }

  deleteConsultation(id: number): Observable<any> {
    return this.httpClient.delete(this.ConsultationUrl + '/' + id);
  }
}
