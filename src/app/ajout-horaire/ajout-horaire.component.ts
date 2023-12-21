import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HorTravailService } from '../services/HorTravail.service';

@Component({
  selector: 'app-ajout-horaire',
  templateUrl: './ajout-horaire.component.html',
  styleUrls: ['./ajout-horaire.component.css']
})
export class AjoutHoraireComponent {
  constructor(private formBuilder:FormBuilder,private horaireService: HorTravailService,private router:Router){}
  cabinetId :any; 
  horaire:any={};
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
    this.horaireService.addHoraire(this.horaire).subscribe(
      (data)=>{
this.horaire=data;
        this.router.navigate(['']);
      }
    ) 
  }
}






