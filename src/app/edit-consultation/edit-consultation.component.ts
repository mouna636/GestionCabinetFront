import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from '../services/consultation.service';
import { Consultation } from '../Models/consultation';

@Component({
  selector: 'app-edit-consultation',
  templateUrl: './edit-consultation.component.html',
  styleUrls: ['./edit-consultation.component.css'],
})
export class EditConsultationComponent {
  editConsultationForm: any;
  id: any;
  consultation: any = {};

  constructor(
    private activateRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private consultationService: ConsultationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.consultationService
      .getConsultationById(this.id)
      .subscribe((data: any) => {
        console.log(data);

        this.consultation = data;
      });
  }

  editConsultation() {
    this.consultationService
      .updateConsultation(this.id, this.consultation)
      .subscribe(() => {
        this.router.navigate(['dashboard-doctor/list-consultation']);
      });
  }
}
