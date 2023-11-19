import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../services/cabinet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cabinet-patient',
  templateUrl: './cabinet-patient.component.html',
  styleUrls: ['./cabinet-patient.component.css']
})
export class CabinetPatientComponent implements OnInit {
  adresse:any;
  cabinets:any;
  constructor(private cabinetservice:CabinetService,private route: ActivatedRoute){}
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
searchCabinetByAdresse(){
  this.cabinetservice.searchCabinetByAdresse(this.adresse).subscribe(
    (data)=> {
      this.cabinets=data;
       }
  );
      }
      
      /* deleteCabinet(id:any){
        this.cabinetservice.deleteCabinet(id).subscribe(
          ()=>{
            this.getAllCabinetsFromService();
          }
        )
      } */
    }