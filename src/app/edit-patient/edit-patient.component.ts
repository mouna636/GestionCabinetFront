import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css'],
})
export class EditPatientComponent {
  editPatientForm: any;
  id: any;
  patient: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.patientService.getPatientById(this.id).subscribe((data: any) => {
      this.patient = data;
    });
  }

  editPatient() {
    this.patientService.updatePatient(this.id, this.patient).subscribe(() => {
      this.router.navigate(['dashboard-infermier/list-patient']);
    });
  }
}
