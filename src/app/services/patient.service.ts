import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  PatientUrl: string = 'http://localhost:8080/patients';

  constructor(private httpClient: HttpClient) {}

  getPatientById(id: any): Observable<any> {
    return this.httpClient.get(this.PatientUrl + '/' + id);
  }

  getAllPatients(): Observable<any> {
    return this.httpClient.get(this.PatientUrl);
  }

  savePatient(patient: any): Observable<any> {
    return this.httpClient.post(this.PatientUrl, patient);
  }

  updatePatient(id: number, patient: any): Observable<any> {
    return this.httpClient.put(this.PatientUrl + '/' + id, patient);
  }

  deletePatient(id: number): Observable<any> {
    return this.httpClient.delete(this.PatientUrl + '/' + id);
  }
}
