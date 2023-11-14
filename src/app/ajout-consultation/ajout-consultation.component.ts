import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultationService } from '../services/consultation.service';
import { Patient } from '../Models/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-ajout-consultation',
  templateUrl: './ajout-consultation.component.html',
  styleUrls: ['./ajout-consultation.component.css'],
})
export class AjoutConsultationComponent {
  addConsultationForm: any;
  consultation: any = {};
  patients: any = [];
  // patient: Patient = {};
  // patientSelectionner: Patient = {};
  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private consultationService: ConsultationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPatients();
    this.addConsultationForm = this.formBuilder.group({
      date_consultation: new Date(),
      Synthese: ['Aucune synthèse'],
      act: [''],
      patient: [null],
    });
  }
  getPatients() {
    this.patientService.getAllPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }
  saveConsultation() {
    this.consultationService
      .saveConsultation(this.consultation)
      .subscribe(() => {
        this.router.navigate(['dashboard-doctor/list-consultation']);
      });
  }
}
