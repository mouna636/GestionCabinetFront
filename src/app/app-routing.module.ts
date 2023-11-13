import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';

import { ListCabinetComponent } from './list-cabinet/list-cabinet.component';
import { DashboardDoctorComponent } from './dashboard-doctor/dashboard-doctor.component';
import { AjoutInfermierComponent } from './ajout-infermier/ajout-infermier.component';
import { ListInfermierComponent } from './list-infermier/list-infermier.component';
import { AjoutCabinetComponent } from './ajout-cabinet/ajout-cabinet.component';
import { EditInfermierComponent } from './edit-infermier/edit-infermier.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
  { path: 'header', component: HeaderComponent},
  {path: 'section', component: SectionComponent},
  {path:'ajout-cabinet', component:AjoutCabinetComponent},
  {path:'list-cabinet',component:ListCabinetComponent},
  {path:'dashboard-doctor',component:DashboardDoctorComponent},
  {path:'ajout-infermier',component:AjoutInfermierComponent},
  {path:'list-infermier',component:ListInfermierComponent},
  {path:'dashboard-infermier',component:DashboardDoctorComponent},
  {path:'edit-infermier/:id',component:EditInfermierComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
