import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Infirmier } from "../models/infirmier.model";


@Injectable({ //role de @Injectable est : permettre à Angular de savoir que ce service peut lui-même avoir des dépendances
    providedIn: 'root'
    })


export class InfirmierService {

    InfirmierUrl :string = 'http://localhost:8080/infirmiers'; //url de l'API REST qui nous permet de récupérer les infirmiers

    constructor(private httpClient: HttpClient) { } //on injecte le service HttpClient dans le constructeur de InfirmierService

    //on crée une méthode qui va nous permettre de récupérer tous les infirmiers
    getAllInfirmiers():Observable<any> { //on utilise le type Observable pour pouvoir utiliser la méthode subscribe() dans le composant qui va utiliser cette méthode
        return this.httpClient.get(this.InfirmierUrl); //on utilise la méthode get() du service HttpClient pour récupérer les infirmiers
    }

    //on crée une méthode qui va nous permettre de récupérer un infirmier en particulier
    getInfirmierById(id: any):Observable<any> {
        return this.httpClient.get('${this.InfirmierUrl}/${id}');
    }

    //on crée une méthode qui va nous permettre de créer un infirmier
    createInfirmier(infirmier: Infirmier):Observable<any> {
        return this.httpClient.post(this.InfirmierUrl, infirmier);
    }

    //on crée une méthode qui va nous permettre de modifier un infirmier on utilise l'id de l'infirmier pour le modifier
    updateInfirmier(id: any, infirmier: Infirmier):Observable<any> {
        return this.httpClient.put('${this.InfirmierUrl}/${id}', infirmier);
    }

    //on crée une méthode qui va nous permettre de supprimer un infirmier
    deleteInfirmier(id: any):Observable<any> {
        return this.httpClient.delete('${this.InfirmierUrl}/${id}');
    }
}
