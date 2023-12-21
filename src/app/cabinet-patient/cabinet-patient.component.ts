import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../services/cabinet.service';
import { ActivatedRoute } from '@angular/router';
import { ProcessingImageService } from '../services/processing-image.service';
import { Cabinet } from '../Models/cabinet';
import { map } from 'rxjs';
import { HorTravailService } from '../services/HorTravail.service';

@Component({
  selector: 'app-cabinet-patient',
  templateUrl: './cabinet-patient.component.html',
  styleUrls: ['./cabinet-patient.component.css']
})
export class CabinetPatientComponent implements OnInit {
  adresse:any;
  cabinets:any;
  id:any;
  constructor(private cabinetservice:CabinetService,private route: ActivatedRoute,private horaireService:HorTravailService){}
 
  ngOnInit(){
    this.getAllCabinetsFromService(); 
  }
  
  getAllCabinetsFromService(){
    this.cabinetservice.getAllCabinets().subscribe(
      (data: Cabinet[]) => {  
        this.cabinets = data;
        console.log(data);
      }
    );
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