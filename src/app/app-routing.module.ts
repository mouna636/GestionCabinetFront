import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AjoutInfirmierComponent } from './ajout-infirmier/ajout-infirmier.component';
import { InfirmierTableComponent } from './infirmier-table/infirmier-table.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'ajout-infirmier', component: AjoutInfirmierComponent },
  { path: 'infirmier-table', component: InfirmierTableComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'footer', component: FooterComponent},
  { path: 'header', component: HeaderComponent},
  {path: 'section', component: SectionComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
