import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";




@Injectable({
    providedIn: 'root'
    })
    
export class OrdonnanceService {

    MedicamentUrl :string = 'http://localhost:8080/medicaments';

    constructor(private httpClient: HttpClient) { }


    getMedicamentById(id: any): Observable<any>{
        return this.httpClient.get(this.MedicamentUrl + '/' + id);
    }

    getAllMedicaments():Observable<any>{
        return this.httpClient.get(this.MedicamentUrl);
    }

    addMedicament(medicament: any):Observable<any> {
        return this.httpClient.post(this.MedicamentUrl, medicament);
    }

    updateMedicament(id: number, medicament: any):Observable<any> {
        return this.httpClient.put(this.MedicamentUrl + '/' + id, medicament);
    }

    deleteMedicament(id: number):Observable<any> {
        return this.httpClient.delete(this.MedicamentUrl + '/' + id);
    }
}