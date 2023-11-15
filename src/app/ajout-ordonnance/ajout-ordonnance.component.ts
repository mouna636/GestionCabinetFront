import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-ordonnance',
  templateUrl: './ajout-ordonnance.component.html',
  styleUrls: ['./ajout-ordonnance.component.css']
})
export class AjoutOrdonnanceComponent {

  addPatientForm: any;
  patient: any = {};
  addOrdonnanceTraitementForm: any;
  ordonnanceTraitement: any = {};
  
    constructor( private formBuilder:FormBuilder,
                 private patientService:PatientService,
                 private router:Router,) { }

    
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
        telephone: ['']
      });

      this.addOrdonnanceTraitementForm = this.formBuilder.group({
        medicament: [''],
        posologie: [''],
        nbrUnite: 0,
        qsp: 0
      });
    }

}
