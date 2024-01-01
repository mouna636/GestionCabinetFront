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
import { CabinetPatientComponent } from './cabinet-patient/cabinet-patient.component';
import { AjoutCabinetComponent } from './ajout-cabinet/ajout-cabinet.component';
import { EditInfermierComponent } from './edit-infermier/edit-infermier.component';
import { AjoutConsultationComponent } from './ajout-consultation/ajout-consultation.component';
import { EditConsultationComponent } from './edit-consultation/edit-consultation.component';
import { ListConsultationComponent } from './list-consultation/list-consultation.component';
import { DashboardInfermierComponent } from './dashboard-infermier/dashboard-infermier.component';
import { AjoutPatientComponent } from './ajout-patient/ajout-patient.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';
import { AjoutOrdonnanceComponent } from './ajout-ordonnance/ajout-ordonnance.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { AjoutHoraireComponent } from './ajout-horaire/ajout-horaire.component';

import { NgModule } from '@angular/core';
import { NavComponent } from './nav/nav.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddCabinetComponent } from './add-cabinet/add-cabinet.component';
import { AjoutConsultationMainComponent } from './ajout-consultation-main/ajout-consultation-main.component';
import { AjoutOrdonnanceMainComponent } from './ajout-ordonnance-main/ajout-ordonnance-main.component';
import { ListOrdonnanceComponent } from './list-ordonnance/list-ordonnance.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'section', component: SectionComponent },


  //Affichage unique test :
  { path: 'ajout-cabinet', component: AjoutCabinetComponent },
  { path: 'list-cabinet', component: ListCabinetComponent },


  { path: 'ajout-infermier', component: AjoutInfermierComponent },
  { path: 'list-infermier', component: ListInfermierComponent },

  { path: 'cabinet-patient', component: CabinetPatientComponent },
  { path: 'addCabinet', component: AddCabinetComponent },

  { path: 'ajout-ordonnance', component: AjoutOrdonnanceComponent },
  
  //--------------------------------------------------------------------------


  //Affichage dans le Dashbord-doctor :
  { path: 'dashboard-doctor', component: DashboardDoctorComponent },
      
      //Gestion des infermiers
  {path: 'dashboard-doctor/ajout-infermier',component: AjoutInfermierComponent,},
  {path: 'dashboard-doctor/list-infermier', component: ListInfermierComponent,},  
  {path: 'dashboard-doctor/edit-infermier/:id',component: EditInfermierComponent,}, 

      //Gestion des consultations
  {path: 'dashboard-doctor/ajout-consultation',component: AjoutConsultationMainComponent, },
  {path: 'dashboard-doctor/edit-consultation/:id', component: EditConsultationComponent,},
  {path: 'dashboard-doctor/list-consultation',component: ListConsultationComponent,},

      //Gestion des ordonnances
  {path:'dashboard-doctor/ajout-ordonnanceMain',component: AjoutOrdonnanceMainComponent, },
  {path:'dashboard-doctor/list-ordonnances',component: ListOrdonnanceComponent, },


  //--------------------------------------------------------------------------


  //Affichage dans le Dashbord-infermier :
  { path: 'dashboard-infermier', component: DashboardInfermierComponent },

  {path: 'dashboard-infermier/ajout-patient',component: AjoutPatientComponent,},
  {path: 'dashboard-infermier/edit-patient/:id',component: EditPatientComponent, },
  {path: 'dashboard-infermier/list-patient', component: ListPatientComponent },

  //--------------------------------------------------------------------------
  
  
  //Register and Login :
  
  { path: 'nav', component: NavComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
