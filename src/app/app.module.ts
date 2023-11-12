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
export class AppModule { }
