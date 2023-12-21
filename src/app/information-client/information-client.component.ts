import { Component, Input } from '@angular/core';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-information-client',
  templateUrl: './information-client.component.html',
  styleUrls: ['./information-client.component.css'],
})
export class InformationClientComponent {
  @Input() patient: any;
  patientAge: any;
  constructor(private consultationService: ConsultationService) {}

  ngOnInit() {
    this.calculateAge();
  }
  calculateAge() {
    this.patientAge = this.consultationService.calculateAge(
      this.patient.dateNaissance
    );
  }
}
