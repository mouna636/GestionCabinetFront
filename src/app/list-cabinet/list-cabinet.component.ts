import { Component, OnInit } from '@angular/core';
import { CabinetService } from '../services/cabinet.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Cabinet } from '../Models/cabinet';
import { ProcessingImageService } from '../services/processing-image.service';
@Component({
  selector: 'app-list-cabinet',
  templateUrl: './list-cabinet.component.html',
  styleUrls: ['./list-cabinet.component.css']
})
export class ListCabinetComponent implements OnInit {
  cabinets:any;
 horaires:any;
  
  constructor(private cabinetservice:CabinetService,private router:Router,private processingimageservice:ProcessingImageService){}
  ngOnInit(){
   this.getAllCabinet();
   
  }
getAllCabinet(){
  this.cabinetservice.getAllCabinets() .subscribe(
    (data)=> {  
    
    this.cabinets=data;
    console.log(data)
    
     }
   )
}


/* getAllCabinetsFromService(){
  this.cabinetservice.getAllCabinets().pipe(
    map((data: Cabinet[]) =>
      data.map((cabinet: Cabinet) =>
        this.processingimageservice.createImages(cabinet)
      )
    )
  ).subscribe(
    (processedData: Cabinet[]) => {
      this.cabinets = processedData;
    },
    (error: any) => {
      // Gérer les erreurs ici
    }
  );
} */

}