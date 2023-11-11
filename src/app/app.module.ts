import { NgModule } from "@angular/core";
import { AjoutInfirmierComponent } from "./ajout-infirmier/ajout-infirmier.component";
import { AppComponent } from "./app.component";
import { ContactComponent } from "./contact/contact.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { InfirmierTableComponent } from "./infirmier-table/infirmier-table.component";
import { SectionComponent } from "./section/section.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { InfirmierService } from "./services/infirmier.service";



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        SectionComponent,
        ContactComponent,
        InfirmierTableComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'ajout-infirmier', component: AjoutInfirmierComponent },
        { path: 'infirmier-table', component: InfirmierTableComponent },
        { path: 'contact', component: ContactComponent },
        { path: 'footer', component: FooterComponent },
        { path: 'header', component: HeaderComponent },
        { path: 'section', component: SectionComponent },
        ])
    ],
    providers: [InfirmierService],
    bootstrap: [AppComponent]
    })
export class AppModule { }