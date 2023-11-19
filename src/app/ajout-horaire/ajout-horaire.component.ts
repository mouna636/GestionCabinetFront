import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CabinetService } from '../services/cabinet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-horaire',
  templateUrl: './ajout-horaire.component.html',
  styleUrls: ['./ajout-horaire.component.css']
})
export class AjoutHoraireComponent {
  constructor(private formBuilder:FormBuilder,private cabinetService:CabinetService,private router:Router){}
  cabinetId :any; 
  horaireTravail:any={};
  horaireForm:any;
 
  ngOnInit() {
    this.horaireForm = this.formBuilder.group({ 
      date:new Date(), 
      heureDebut:[''],
      heureFin:[''],
      jourSemaine:['']
  }
  )
}
  ajouterHoraire(){
    this.cabinetService.ajouterHoraireTravailAuCabinet(this.cabinetId, this.horaireTravail)
    .subscribe(
      ()=>{
        this.router.navigate(['']);
      }
    ) 
  }
}






