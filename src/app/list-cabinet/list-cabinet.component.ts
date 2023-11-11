import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../services/cabinet.service';

@Component({
  selector: 'app-list-cabinet',
  templateUrl: './list-cabinet.component.html',
  styleUrls: ['./list-cabinet.component.css']
})
export class ListCabinetComponent implements OnInit {
  cabinets:any;
  constructor(private cabinetservice:CabinetService,){}
  ngOnInit(){
   this.getAllCabinetsFromService();
  }
getAllCabinetsFromService(){
  this.cabinetservice.getAllCabinets().subscribe(
   (data)=> {
   this.cabinets=data;
    }
  )
}
}
