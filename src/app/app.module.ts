import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { ContactComponent } from './contact/contact.component';
import { AjoutCabinetComponent } from './ajout-cabinet/ajout-cabinet.component';
import { ListCabinetComponent } from './list-cabinet/list-cabinet.component';
import { FormsModule } from '@angular/forms';
import { DashboardDoctorComponent } from './dashboard-doctor/dashboard-doctor.component';
import { DashboardInfermierComponent } from './dashboard-infermier/dashboard-infermier.component';
import { AjoutInfermierComponent } from './ajout-infermier/ajout-infermier.component';
import { ListInfermierComponent } from './list-infermier/list-infermier.component';
import { CabinetPatientComponent } from './cabinet-patient/cabinet-patient.component';

import { EditInfermierComponent } from './edit-infermier/edit-infermier.component';
import { DashboardStatComponent } from './dashboard-stat/dashboard-stat.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarInfComponent } from './side-bar-inf/side-bar-inf.component';
import { AjoutPatientComponent } from './ajout-patient/ajout-patient.component';
import { AjoutConsultationComponent } from './ajout-consultation/ajout-consultation.component';
import { ListConsultationComponent } from './list-consultation/list-consultation.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { EditConsultationComponent } from './edit-consultation/edit-consultation.component';
import { EditPatientComponent } from './edit-patient/edit-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    ContactComponent,
    AjoutCabinetComponent,
    ListCabinetComponent,
    DashboardDoctorComponent,
    DashboardInfermierComponent,
    AjoutInfermierComponent,
    ListInfermierComponent,
    CabinetPatientComponent,
   
    EditInfermierComponent,
    DashboardStatComponent,
    SideBarComponent,
    TopBarComponent,
    SideBarInfComponent,
    AjoutPatientComponent,
    AjoutConsultationComponent,
    ListConsultationComponent,
    ListPatientComponent,
    EditConsultationComponent,
    EditPatientComponent,
   
    
  ],
  imports: [
    BrowserModule,
     FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

