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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { AjoutConsultationV2Component } from './ajout-consultation-v2/ajout-consultation-v2.component';
import { AjoutConsultationMainComponent } from './ajout-consultation-main/ajout-consultation-main.component';
import { InformationClientComponent } from './information-client/information-client.component';
import { DatePipe } from '@angular/common';
import { HistoriquePatientComponent } from './historique-patient/historique-patient.component';
import { PaperCardComponent } from './paper-card/paper-card.component';
import { AjoutOrdonnanceComponent } from './ajout-ordonnance/ajout-ordonnance.component';
import { MedicamentComponent } from './medicament/medicament.component';
import { NgxPrintModule } from 'ngx-print';
import { ListOrdonnancesComponent } from './list-ordonnances/list-ordonnances.component';
import { AjoutOrdonnanceSelectPatientComponent } from './ajout-ordonnance-select-patient/ajout-ordonnance-select-patient.component';
import { AjoutOrdonnanceMainComponent } from './ajout-ordonnance-main/ajout-ordonnance-main.component';

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
    AjoutConsultationV2Component,
    AjoutConsultationMainComponent,
    InformationClientComponent,
    HistoriquePatientComponent,
    PaperCardComponent,
    AjoutOrdonnanceComponent,
    MedicamentComponent,
    ListOrdonnancesComponent,
    AjoutOrdonnanceSelectPatientComponent,
    AjoutOrdonnanceMainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPrintModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
