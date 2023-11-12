import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AjoutCabinetComponent } from './ajout-cabinet/ajout-cabinet.component';
import { ListCabinetComponent } from './list-cabinet/list-cabinet.component';
import { DashboardDoctorComponent } from './dashboard-doctor/dashboard-doctor.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'ajout-cabinet', component:AjoutCabinetComponent},
  {path:'list-cabinet',component:ListCabinetComponent},
  {path:'dashboard-doctor',component:DashboardDoctorComponent},
  {path:'dashboard-infermier',component:DashboardDoctorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
