import { Component, OnInit } from '@angular/core';

import { InfirmierService } from '../services/infirmier.service';

@Component({
  selector: 'app-list-infermier',
  templateUrl: './list-infermier.component.html',
  styleUrls: ['./list-infermier.component.css']
})
export class ListInfermierComponent implements OnInit{
  infirmiers:any;
 
  constructor(private infirmierService:InfirmierService){}
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
}
