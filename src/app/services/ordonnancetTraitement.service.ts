import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root',
})


export class ordonnancetTraitementService {

    OrdonnancetTraitementUrl: string = 'http://localhost:8080/ordonnancetTraitement';

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

}