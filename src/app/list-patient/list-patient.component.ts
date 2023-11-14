import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css'],
})
export class ListPatientComponent {
  patients: any;

  constructor(private router: Router, private patientService: PatientService) {}

  ngOnInit() {
    this.getPatientsFromService();
  }

  getPatientsFromService() {
    this.patientService.getAllPatients().subscribe((data) => {
      this.patients = data;
    });
  }

  //Bouton Edit
  gotToEditPatient(x: any) {
    this.router.navigate([`dashboard-infermier/edit-patient/${x}`]);
  }

  //Bouton Delete
  deletePatient(id: any) {
    this.patientService.deletePatient(id).subscribe(() => {
      this.getPatientsFromService();
    });
  }
}
