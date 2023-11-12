import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfirmierService {

  InfirmierUrl :string = 'http://localhost:8080/infirmiers'; 

    constructor(private httpClient: HttpClient) { } 
   
    getAllInfirmiers():Observable<any> 
    {
        return this.httpClient.get(this.InfirmierUrl); 
    }

    saveInfirmier(infirmier: any):Observable<any> {
        return this.httpClient.post(this.InfirmierUrl, infirmier);
    }

   
}



