import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { ConsultationService } from '../services/consultation.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajout-ordonnance-select-patient',
  templateUrl: './ajout-ordonnance-select-patient.component.html',
  styleUrls: ['./ajout-ordonnance-select-patient.component.css']
})
export class AjoutOrdonnanceSelectPatientComponent {

  getPatientFromConsultation: any;
  patients: any = [];
  selectedPatient: any = null;
  showConsultationForm: boolean = false;

  constructor(
    private patientService: PatientService,
    private consultationService: ConsultationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.getPatients();
    this.getPatientFromConsultation = this.formBuilder.group({
      selectedPatient: [null],
    });
  }
  selectPatient() {
    if (this.selectedPatient != null)
      this.consultationService.setSelectedPatient(this.selectedPatient);
  }
  getPatients() {
    this.patientService.getAllPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }
}

