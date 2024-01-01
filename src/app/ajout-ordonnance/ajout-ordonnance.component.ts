import { Component, Input } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { OrdonnancetTraitementService } from '../services/ordonnancetTraitement.service';
import * as moment from 'moment';

@Component({
  selector: 'app-ajout-ordonnance',
  templateUrl: './ajout-ordonnance.component.html',
  styleUrls: ['./ajout-ordonnance.component.css'],
})
export class AjoutOrdonnanceComponent {
 
  //classes
  patient: any = {};
  ordonnanceTraitement: any = {};
 
  //liste et form
  medicaments: FormArray;
  medicamentForm!: FormGroup;

  //Ajout
  selectedPatient: any;
  OrdonnanceTraitementDateForm: any;


  constructor(
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private ordonnancetTraitementService: OrdonnancetTraitementService,
    private router: Router
  ) {
    this.medicaments = this.formBuilder.array([this.createMedFormGroup()]); 
  }



  ngOnInit() {
    
    //Ajout
    this.ordonnancetTraitementService.selectedPatient$.subscribe((patient) => {
      this.selectedPatient = patient;
    });

    /* this.OrdonnanceTraitementDateForm = this.formBuilder.group({
      dateOrdonnance: [''],
    }); */

    this.OrdonnanceTraitementDateForm = this.formBuilder.group({
      dateOrdonnance: [moment().format('YYYY-MM-DD')], // 
    });

    this.medicamentForm = this.formBuilder.group({
      medicaments: this.formBuilder.array([this.createMedFormGroup()]),
    });

  }
  

  // Méthodes pour la Partie Médicament :
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
  //-----------------------------------------------------------

  //Partie Sauvgarde de l'ordonnance :

  save() {
    this.ordonnanceTraitement = {
      dateOrdonnance: this.OrdonnanceTraitementDateForm.value.dateOrdonnance,
      patient: this.selectedPatient,
      medicaments: this.medicamentForm.value.medicaments,
    };
    this.ordonnancetTraitementService
      .addordonnancetTraitement(this.ordonnanceTraitement)
      .subscribe((data) => {
        console.log(data);
        this.router.navigate(['/dashboard-doctor/list-ordonnances']);
        
      });
  }



  


}
