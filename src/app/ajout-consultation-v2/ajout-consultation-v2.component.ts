import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultationService } from '../services/consultation.service';
import { PatientService } from '../services/patient.service';
import { DatePipe } from '@angular/common';
import { motifs, diagnostics } from '../data/consultationData';

@Component({
  selector: 'app-ajout-consultation-v2',
  templateUrl: './ajout-consultation-v2.component.html',
  styleUrls: ['./ajout-consultation-v2.component.css'],
})
export class AjoutConsultationV2Component {
  addConsultationForm: any;
  addConsultationDateForm: any;
  motifs: Array<{ value: string; label: string }> = [];
  diagnostiques: Array<{ value: string; label: string }> = [];
  consultation: any = {};
  consultationsPatient: any = [];
  patients: any = [];
  showConsultationForm: boolean = false;
  selectedRadioButton: string = 'ficheConsultation';

  @Input() selectedPatient: any;
  selectedPatientAge: any;
  today = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  constructor(
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private consultationService: ConsultationService,
    private router: Router,
    private datePipe: DatePipe
  ) {}
  ngOnInit() {
    this.getPatients();
    this.calculateAge();
    this.getConsultationByPatientId();

    this.addConsultationForm = this.formBuilder.group({
      motif: [''],
      diagnostique: [''],
      resExamClinique: [''],
      poids: [null, { updateOn: 'blur' }], // Update IMC on blur
      taille: [null, { updateOn: 'blur' }], // Update IMC on blur
      imc: [''],
      temperature: [''],
      freqCardiaque: [''],
      pressionArterielle: [''],
      observation: [''],
      patient: [{}],
    });
    this.addConsultationDateForm = this.formBuilder.group({
      date_consultation: new Date(),
    });

    this.consultation.patient = this.selectedPatient;
    this.diagnostiques = diagnostics;
    this.motifs = motifs;
  }

  calculateAge() {
    this.selectedPatientAge = this.consultationService.calculateAge(
      this.selectedPatient.dateNaissance
    );
  }
  getPatients() {
    this.patientService.getAllPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }

  calculateIMC() {
    if (this.consultation.poids !== null && this.consultation.taille !== null) {
      const poids = parseFloat(this.consultation.poids);
      const taille = parseFloat(this.consultation.taille) / 100;
      const imc = poids / taille ** 2;
      console.log(this.consultation.taille);
      if (imc) {
        this.consultation.imc = Math.round(imc);
      } else {
        return;
      }
    } else {
      this.consultation.imc = null;
    }
  }

  saveConsultation() {
    console.log(this.consultation);

    this.consultationService
      .saveConsultation(this.consultation)
      .subscribe(() => {
        this.router.navigate(['dashboard-doctor/list-consultation']);
      });
  }

  getConsultationByPatientId() {
    this.consultationService
      .getConsultationsByPatientId(this.selectedPatient.id)
      .subscribe((consultations) => {
        this.consultationsPatient = consultations;
      });
  }
}
