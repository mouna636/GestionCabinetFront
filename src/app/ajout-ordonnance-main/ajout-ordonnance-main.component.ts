import { Component } from '@angular/core';
import { OrdonnancetTraitementService } from '../services/ordonnancetTraitement.service';

@Component({
  selector: 'app-ajout-ordonnance-main',
  templateUrl: './ajout-ordonnance-main.component.html',
  styleUrls: ['./ajout-ordonnance-main.component.css']
})
export class AjoutOrdonnanceMainComponent {
  selectedPatient: any = {};


  constructor( private ordonnancetTraitementService: OrdonnancetTraitementService, ) { }
  
  ngOnInit() {
    this.ordonnancetTraitementService.selectedPatient$.subscribe((selectedPatient) => {
      this.selectedPatient = selectedPatient;
    });
  }
}
