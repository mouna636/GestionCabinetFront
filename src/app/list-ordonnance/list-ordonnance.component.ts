import { Component } from '@angular/core';
import { OrdonnanceService } from '../services/medicament.service';
import { OrdonnancetTraitementService } from '../services/ordonnancetTraitement.service';
import { PatientService } from '../services/patient.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-ordonnance',
  templateUrl: './list-ordonnance.component.html',
  styleUrls: ['./list-ordonnance.component.css']
})
export class ListOrdonnanceComponent {

  ordonnanceTraitement:any;

    constructor(private router: Router,
      private ordonnancetTraitementService: OrdonnancetTraitementService,
      private patientService: PatientService,) { }
      
  
    
    ngOnInit() {

      this.ordonnancetTraitementService.getAllOrdonnancetTraitement().subscribe(data => {
        this.ordonnanceTraitement = data;
      },
      (error) => {
        console.error("Une erreur s'est produite lors de la récupération des ordonnances :", error);
      });
      

      
    }

    

}


/* @Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  
  private selectedData = new BehaviorSubject<any>(null);
  selectedData$ = this.selectedData.asObservable();

  ordonnanceTraitement: any ;

  constructor() { }

  setSelectedData(data: any) {
    this.selectedData.next(data);
  }


} */
