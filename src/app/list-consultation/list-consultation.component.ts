import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-list-consultation',
  templateUrl: './list-consultation.component.html',
  styleUrls: ['./list-consultation.component.css'],
})
export class ListConsultationComponent {
  consultations: any;

  constructor(
    private router: Router,
    private consultationService: ConsultationService
  ) {}

  ngOnInit() {
    this.getConsultationsFromService();
    console.log(this.consultations);
  }
  getConsultationsFromService() {
    this.consultationService.getAllConsultations().subscribe((data) => {
      for (const consultation of data) {
        if (consultation.date_consultation) {
          consultation.date_consultation = this.consultationService.formatDate(
            consultation.date_consultation
          );
        } else consultation.date_consultation = 'Pas de date';
      }
      this.consultations = data;
    });
  }

  //Bouton Edit
  gotToEditConsultation(x: any) {
    this.router.navigate([`dashboard-doctor/edit-consultation/${x}`]);
  }

  //Bouton Delete
  deleteConsultation(id: any) {
    this.consultationService.deleteConsultation(id).subscribe(() => {
      this.getConsultationsFromService();
    });
  }
}
