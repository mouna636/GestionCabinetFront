import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-ordonnance',
  templateUrl: './ajout-ordonnance.component.html',
  styleUrls: ['./ajout-ordonnance.component.css'],
})
export class AjoutOrdonnanceComponent {
  addPatientForm: any;
  patient: any = {};
  addOrdonnanceTraitementForm: any;
  ordonnanceTraitement: any = {};
  medicamentForm!: FormGroup;
  medicaments: FormArray;
  previewData: any = {};
  showPreview: boolean = false;
  hideOtherContent: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) {
    this.medicaments = this.formBuilder.array([this.createMedFormGroup()]);
  }

  ngOnInit() {
    this.addPatientForm = this.formBuilder.group({
      nomPatient: [''],
      prenomPatient: [''],
      dateNaissance: [''],
      sexe: [''],
      adresse: [''],
      situationFamilliale: [''],
      assusranceMedical: [''],
      codeAssurance: [''],
      telephone: [''],
    });

    this.addOrdonnanceTraitementForm = this.formBuilder.group({
      dateOrdonnance: [''],
    });

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
}
