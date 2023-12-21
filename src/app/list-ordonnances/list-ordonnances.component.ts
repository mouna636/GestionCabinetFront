import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { OrdonnancetTraitementService } from '../services/ordonnancetTraitement.service';

@Component({
  selector: 'app-list-ordonnances',
  templateUrl: './list-ordonnances.component.html',
  styleUrls: ['./list-ordonnances.component.css']
})
export class ListOrdonnancesComponent {
  patients: any;
  ordonnances: any;
  constructor(private router: Router, private patientService: PatientService, private ordonnancetTraitementService: OrdonnancetTraitementService  ) {}

  ngOnInit() {
    this.getPatientsFromService();
    this.getOrdonnancesFromService();
       
  }



  getPatientsFromService() {
    this.patientService.getAllPatients().subscribe((data) => {
      this.patients = data;
    });
  }

  getOrdonnancesFromService(){
    this.ordonnancetTraitementService.getAllOrdonnancetTraitement().subscribe((data) => {
      this.ordonnances = data;
    });

  }

}
