import { Component } from '@angular/core';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-ajout-consultation-main',
  templateUrl: './ajout-consultation-main.component.html',
  styleUrls: ['./ajout-consultation-main.component.css'],
})
export class AjoutConsultationMainComponent {
  selectedPatient: any = {};

  constructor(private consultationService: ConsultationService) {}

  ngOnInit() {
    this.consultationService.selectedPatient$.subscribe((selectedPatient) => {
      this.selectedPatient = selectedPatient;
    });
  }
}
