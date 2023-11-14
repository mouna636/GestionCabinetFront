import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-doctor',
  templateUrl: './dashboard-doctor.component.html',
  styleUrls: ['./dashboard-doctor.component.css']
})
export class DashboardDoctorComponent {


  //Affichage des services(sections) dans le dashboard
  sectionAfficher:String="";

  afficheSection(x:string){
     this.sectionAfficher=x;}

     




}

