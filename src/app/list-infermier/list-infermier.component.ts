import { Component, OnInit } from '@angular/core';

import { InfirmierService } from '../services/infirmier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-infermier',
  templateUrl: './list-infermier.component.html',
  styleUrls: ['./list-infermier.component.css']
})
export class ListInfermierComponent implements OnInit{
  infirmiers:any;
 
  constructor(private router:Router, private infirmierService:InfirmierService){}

  ngOnInit(){
   this.getInfermierFromService();
  }

  getInfermierFromService(){
    this.infirmierService.getAllInfirmiers().subscribe(
      (data)=> {
      this.infirmiers=data;
       }
     )
  }

  //Bouton Edit
  gotToEditInfirmier(x:any){
    this.router.navigate([`edit-infermier/${x}`])
  }



  //Bouton Delete 
  deleteInfirmier(id:any){
    this.infirmierService.deleteInfirmier(id).subscribe(
      ()=>{
        alert('vous êtes sur de supprimer cet infirmier');
        this.getInfermierFromService();
      }
    )
  }
  
  //la méthode qui réciptionne les données modifiiées lorsque je clique sur la bouton modifier de "edit-infermier.component.html" et elle retourne sur list-infermier
  receiveData($event:any){
    this.getInfermierFromService();
  }
 
    



}
