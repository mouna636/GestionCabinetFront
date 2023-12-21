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
  getPatientFromConsultation: any;
  patients: any = [];
  patientSelectionner: any = null;
  showConsultationForm: boolean = false;

  constructor(
    private patientService: PatientService,
    private consultationService: ConsultationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getPatients();
    this.getPatientFromConsultation = this.formBuilder.group({
      patientSelectionner: [null],
    });
  }
  selectPatient() {
    if (this.patientSelectionner != null)
      this.consultationService.setSelectedPatient(this.patientSelectionner);
  }
  getPatients() {
    this.patientService.getAllPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }
}
