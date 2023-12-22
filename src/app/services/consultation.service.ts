import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  ConsultationUrl: string = 'http://localhost:8080/consultations';
  
  private selectedPatientSource = new BehaviorSubject<any>(null);
  
  selectedPatient$ = this.selectedPatientSource.asObservable();

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

  getConsultationsByPatientId(id: number): Observable<any> {
    return this.httpClient.get(this.ConsultationUrl + '/patient/' + id);
  }

  formatDate(date: Date): String {
    return new Date(date).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  calculateAge(dateOfBirth: Date): number {
    const today = moment();
    const birthDate = moment(dateOfBirth, 'YYYY-MM-DD');
    return today.diff(birthDate, 'years');
  }

  setSelectedPatient(patient: any) {
    this.selectedPatientSource.next(patient);
  }
}
