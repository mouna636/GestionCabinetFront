import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajout-patient',
  templateUrl: './ajout-patient.component.html',
  styleUrls: ['./ajout-patient.component.css'],
})
export class AjoutPatientComponent {
  addPatientForm: any;
  patient: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) {}
  ngOnInit() {
    this.addPatientForm = this.formBuilder.group({
      nomPatient: [''],
      prenomPatient: [''],
      dateNaissance: new Date(),
      sexe: [''],
      adresse: [''],
      situationFamilliale: [''],
      assusranceMedical: [''],
      codeAssurance: [''],
      telephone: 0,
    });
  }
  savePatient() {
    console.log(this.patient);
    this.patientService.savePatient(this.patient).subscribe(() => {
      this.router.navigate(['dashboard-infermier/list-patient']);
    });
  }
}
