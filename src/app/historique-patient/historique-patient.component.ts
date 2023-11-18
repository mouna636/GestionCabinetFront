import { Component, Input, OnInit } from '@angular/core';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-historique-patient',
  templateUrl: './historique-patient.component.html',
  styleUrls: ['./historique-patient.component.css'],
})
export class HistoriquePatientComponent implements OnInit {
  constructor(private consultationService: ConsultationService) {}
  @Input() patient: any;
  consultationsPatient: any = [];
  chosenColor = '';
  colors = ['blue', 'green', 'yellow', 'brown', 'purple', 'orange'];

  ngOnInit() {
    this.consultationService
      .getConsultationsByPatientId(this.patient.id)
      .subscribe((data) => {
        for (const consultation of data) {
          if (consultation.date_consultation) {
            consultation.date_consultation =
              this.consultationService.formatDate(
                consultation.date_consultation
              );
          } else consultation.date_consultation = 'Pas de date';
        }
        this.consultationsPatient = data;
      });
  }

  getRandomColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.chosenColor = this.colors[randomIndex];
  }
}
