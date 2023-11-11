import { Component, OnInit } from '@angular/core';
import { Infirmier } from '../models/infirmier.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHeaders } from '@angular/common/http';
import { InfirmierService } from '../services/infirmier.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ajout-infirmier',
  templateUrl: './ajout-infirmier.component.html',
  styleUrls: ['./ajout-infirmier.component.css']
})
export class AjoutInfirmierComponent  { // role de OnInit est : permettre à Angular de savoir que ce service peut lui-même avoir des dépendances
  /*  infirmier: any = {};
   addInfirmierForm: any = {};  */

  infirmier: Infirmier = {
    id: 0,
    nom: '',
    prenom: '',
    dateNaissance: new Date(),
    sexe: '',
    cin: '',
    telephone: '',
    adresse: '',
    email: '',
    diplome: '',
    anneesExperience: 0,
    dateEmbauche: new Date(),
    salaire: 0,
  }

  constructor(private infirmierService:InfirmierService, private activatedRoute:ActivatedRoute, private router:Router){}

  createInfirmier(event: Event) {
    event.preventDefault();
    const newInfirmier = { ...this.infirmier };
    //console.log(newInfirmier);
    alert(newInfirmier.nom)
    this.infirmierService.createInfirmier(newInfirmier).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/infirmier-table']);
      }
    );
  

}
}






