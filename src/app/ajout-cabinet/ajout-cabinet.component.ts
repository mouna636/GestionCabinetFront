import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CabinetService } from '../services/cabinet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout-cabinet',
  templateUrl: './ajout-cabinet.component.html',
  styleUrls: ['./ajout-cabinet.component.css']
})
export class AjoutCabinetComponent implements OnInit {
  cabinet:any={};
  addCabinetForm:any;
  constructor(private formBuilder:FormBuilder,
    private cabinetService:CabinetService,private router:Router){}
  ngOnInit() {
   this.addCabinetForm=this.formBuilder.group(
    { 
      name:[''],
      adresse:[''],
      telephone:['']

    })
}
addCabinet(){
  console.log (this.cabinet);
  this.cabinetService.addCabinet(this.cabinet).subscribe(
    ()=>{
      this.router.navigate(['list-cabinet']);
    }
  )
}
}