import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { OrdonnancetTraitementService } from '../services/ordonnancetTraitement.service';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-ajout-ordonnance',
  templateUrl: './ajout-ordonnance.component.html',
  styleUrls: ['./ajout-ordonnance.component.css'],
})
export class AjoutOrdonnanceComponent {
  //addPatientForm: any;
  patients: any = [];
  consultation: any = {};
  ordonnanceTraitement: any = {};
  addOrdonnanceTraitementForm: any;
  medicamentForm!: FormGroup;
  medicaments: FormArray;

  @Input () selectedPatient: any;
  selectedPatientAge: any;
  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private ordonnanceTraitementService: OrdonnancetTraitementService,
    private consultationService: ConsultationService,
    private router: Router
  ) {
    this.medicaments = this.formBuilder.array([this.createMedFormGroup()]);
  }

  ngOnInit() {
    console.log(this.selectedPatient);
    
    /* this.addPatientForm = this.formBuilder.group({
      id: [''],
      nomPatient: [''],
      prenomPatient: [''],
      dateNaissance: [''],
      sexe: [''],
      adresse: [''],
      situationFamilliale: [''],
      assusranceMedical: [''],
      codeAssurance: [''],
      telephone: [''],
    }); */

    this.getPatients();
   
    this.addOrdonnanceTraitementForm = this.formBuilder.group({
      id: [''],
      dateOrdonnance: new Date(),
    });

    this.consultation.patient = this.selectedPatient;
    

    this.medicamentForm = this.formBuilder.group({
      medicaments: this.formBuilder.array([this.createMedFormGroup()]),
    });
  }

  addMedFormGroup() {
    const medicaments = this.medicamentForm.get('medicaments') as FormArray;
    medicaments.push(this.createMedFormGroup());
  }

  getControls() {
    return (this.medicamentForm.get('medicaments') as FormArray).controls;
  }

  removeMedicament(i: number) {
    const meds = this.medicamentForm.get('medicaments') as FormArray;
    if (meds.length > 1) {
      meds.removeAt(i);
    } else {
      meds.reset();
    }
  }

  createMedFormGroup(): FormGroup {
    return new FormGroup({
      nom: new FormControl(''),
      posologie: new FormControl(''),
      nombreUnite: new FormControl(''),
      qsp: new FormControl(''),
    });
  }
  
  // Nouvelle méthode pour récupérer les ordonnances liées à un patient
  /* private getOrdonnancesForPatient(patientId: number) {
    this.ordonnanceTraitementService.getOrdonnancesByPatientId(patientId).subscribe((ordonnances) => {
      console.log("Ordonnances pour le patient:", ordonnances);
     
    });
  } */

  getPatients() {
    this.patientService.getAllPatients().subscribe((patients) => {
      this.patients = patients;
    });
  }

  savePatient() {
    console.log(this.patients);
    this.patientService.savePatient(this.patients).subscribe(() => {
      this.router.navigate(['/list-ordonnances']);
    });
  }
  
  saveOrdonnance() {
    console.log(this.ordonnanceTraitement);
    this.ordonnanceTraitementService.addordonnancetTraitement(this.ordonnanceTraitement).subscribe(() => {
      this.router.navigate(['/list-ordonnances']);
    });
}
handleClick() {
  this.savePatient();
  this.saveOrdonnance();

}



}
