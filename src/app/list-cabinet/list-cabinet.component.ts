import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../services/cabinet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-cabinet',
  templateUrl: './list-cabinet.component.html',
  styleUrls: ['./list-cabinet.component.css']
})
export class ListCabinetComponent implements OnInit {
  cabinets:any;
  cabinetId:any;
  
  constructor(private cabinetservice:CabinetService,private router:Router){}
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
ajoutHoraire(cabinetId: any) {
  this.router.navigate([`/ajout-horaire/${cabinetId}`]);
}
}