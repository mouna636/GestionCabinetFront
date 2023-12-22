import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfirmierService {

  InfirmierUrl :string = 'http://localhost:8080/infirmiers'; 

    constructor(private httpClient: HttpClient) { } 


    getInfirmierById(id: any): Observable<any>{
      return this.httpClient.get(this.InfirmierUrl + '/' + id);
    }


    getAllInfirmiers():Observable<any> 
    {
        return this.httpClient.get(this.InfirmierUrl); 
    }

    saveInfirmier(infirmier: any):Observable<any> {
        return this.httpClient.post(this.InfirmierUrl, infirmier);
    }

    updateInfirmier(id: number, infirmier: any):Observable<any> {
        return this.httpClient.put(this.InfirmierUrl + '/' + id, infirmier);
    }

    deleteInfirmier(id: number):Observable<any> {
        return this.httpClient.delete(this.InfirmierUrl + '/' + id);
    }



   
}



