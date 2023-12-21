import { Component } from '@angular/core';
import { ConsultationService } from '../services/consultation.service';

@Component({
  selector: 'app-ajout-ordonnance-main',
  templateUrl: './ajout-ordonnance-main.component.html',
  styleUrls: ['./ajout-ordonnance-main.component.css']
})
export class AjoutOrdonnanceMainComponent {
  selectedPatient: any = {};

  constructor(private consultationService: ConsultationService) {}

  ngOnInit() {
    this.consultationService.selectedPatient$.subscribe((selectedPatient) => {
      this.selectedPatient = selectedPatient;
    });
  }

}
