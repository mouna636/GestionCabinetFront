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
  addMedicamentForm: any;
  medicaments: any[] = [{ nom: '', posologie: '', nombreUnite: '', qsp: '' }]; 
  previewData: any = {};
  showPreview: boolean = false;
  hideOtherContent: boolean = false;

    constructor( private formBuilder:FormBuilder,
                 private patientService:PatientService,
                 private router:Router) { }

    
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
       dateOrdonnance : [''],
        
      });
      this.addMedicamentForm = this.formBuilder.group({
        nom: [''],
        posologie: [''],
        nombreUnite: [''],
        qsp: ['']
      });

    }

     // Méthode pour ajouter un nouveau ligne de table pour les médicaments
    addMedicament() {
      this.medicaments.push({ nom: '', posologie: '', nombreUnite: '', qsp: '' });
  }
   
  // Méthode pour supprimer un ligne de table pour les médicaments
  removeMedicament(medicament: any) {
    const index = this.medicaments.indexOf(medicament);
    if (index !== -1) {
        this.medicaments.splice(index, 1);
    }
}
//
  /* printThisPage() {
    this.previewData = {
      patient: this.addPatientForm.value,
      ordonnanceTraitement: this.addOrdonnanceTraitementForm.value,
      medicaments: this.medicaments
    };
    this.showPreview = true;
    this.hideOtherContent = true;
    window.print();
  } */
  

  
}





