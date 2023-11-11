import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AjoutInfirmierComponent } from './ajout-infirmier/ajout-infirmier.component';
import { InfirmierTableComponent } from './infirmier-table/infirmier-table.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { AjoutCabinetComponent } from './ajout-cabinet/ajout-cabinet.component';
import { ListCabinetComponent } from './list-cabinet/list-cabinet.component';
import { DashboardDoctorComponent } from './dashboard-doctor/dashboard-doctor.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'ajout-infirmier', component: AjoutInfirmierComponent },
  { path: 'infirmier-table', component: InfirmierTableComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
  { path: 'header', component: HeaderComponent},
  {path: 'section', component: SectionComponent},
  {path:'ajout-cabinet', component:AjoutCabinetComponent},
  {path:'list-cabinet',component:ListCabinetComponent},
  {path:'dashboard-doctor',component:DashboardDoctorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
