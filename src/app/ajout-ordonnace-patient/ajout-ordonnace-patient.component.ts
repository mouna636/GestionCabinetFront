import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { OrdonnancetTraitementService } from '../services/ordonnancetTraitement.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajout-ordonnace-patient',
  templateUrl: './ajout-ordonnace-patient.component.html',
  styleUrls: ['./ajout-ordonnace-patient.component.css']
})
export class AjoutOrdonnacePatientComponent {
  getPatientFromConsultation: any;
  patients: any = [];
  patientSelectionner: any = null;
  showConsultationForm: boolean = false;



  constructor(
    private patientService: PatientService,
    private ordonnancetTraitementService: OrdonnancetTraitementService,
    private formBuilder: FormBuilder
    ) { }



    ngOnInit() {

      this.getPatients();
      this.getPatientFromConsultation = this.formBuilder.group({
        patientSelectionner: [null],
      });
    }

    selectPatient() {
      if(this.patientSelectionner !=null){
        this.ordonnancetTraitementService.setSelectedPatient(this.patientSelectionner);
        console.log(this.patientSelectionner);
      }
    }

    getPatients() {
      this.patientService.getAllPatients().subscribe((patients) => {
        this.patients = patients;
      });
    }


}
