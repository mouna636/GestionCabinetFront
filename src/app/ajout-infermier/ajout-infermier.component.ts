import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { InfirmierService } from '../services/infirmier.service';

@Component({
  selector: 'app-ajout-infermier',
  templateUrl: './ajout-infermier.component.html',
  styleUrls: ['./ajout-infermier.component.css']
})
export class AjoutInfermierComponent implements OnInit {
  addInfirmierForm:any;
  infirmier:any={};
  constructor(private formBuilder:FormBuilder
    ,private infirmierService:InfirmierService,private router:Router){}
  ngOnInit()
   {
    this.addInfirmierForm = this.formBuilder.group({ 
      nom:[''],
       prenom:[''],
      /*  naissance:new Date(), */
      sexe:[''],
      cin:[''],
      telephone:[''],
      adresse:[''],
      email:[''],
      diplome:[''],
     /*  dateEmbauche:new Date(), */
     /*  salaire:0  */
  });
   }
   saveInfirmier(){ 
    console.log(this.infirmier);
   this.infirmierService.saveInfirmier(this.infirmier).subscribe(
    ()=>{
      this.router.navigate(['list-infermier']);
    }
  )
}
}