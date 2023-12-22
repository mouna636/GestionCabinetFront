import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as moment from 'moment'
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({
    providedIn: 'root',
})


export class OrdonnancetTraitementService {

    OrdonnancetTraitementUrl: string = 'http://localhost:8080/ordonnanceTraitement';
    

    //ajout
    private selectedPatientSource = new BehaviorSubject<any>(null);
    
    selectedPatient$ = this.selectedPatientSource.asObservable();

    //----


    constructor(private httpClient: HttpClient) { }


    getAllOrdonnancetTraitement(): Observable<any> {
        return this.httpClient.get(this.OrdonnancetTraitementUrl);
    }

    getordonnancetTraitementById(id: any): Observable<any> {
        return this.httpClient.get(this.OrdonnancetTraitementUrl + '/' + id);
    }

    addordonnancetTraitement(ordonnancetTraitement: any): Observable<any> {
        return this.httpClient.post(this.OrdonnancetTraitementUrl, ordonnancetTraitement);
    }

    updateordonnancetTraitement(ordonnancetTraitement: any): Observable<any> {
        return this.httpClient.put(this.OrdonnancetTraitementUrl + '/' + ordonnancetTraitement.id, ordonnancetTraitement);
    }

    deleteordonnancetTraitement(id: any): Observable<any> {
        return this.httpClient.delete(this.OrdonnancetTraitementUrl + '/' + id);
    }


    //ajout
    getOrdonnanceByPatientId(id: number): Observable<any>{
        return this.httpClient.get(this.OrdonnancetTraitementUrl + '/patient/' +id);
    }

    setSelectedPatient(patient: any) {
        this.selectedPatientSource.next(patient);
      }

    //-----

}