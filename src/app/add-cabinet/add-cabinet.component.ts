import { Component } from '@angular/core';
import { Cabinet } from '../Models/cabinet';
import { HoraireTravail } from '../Models/HoraireTravail';
import { CabinetService } from '../services/cabinet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cabinet',
  templateUrl: './add-cabinet.component.html',
  styleUrls: ['./add-cabinet.component.css']
})
export class AddCabinetComponent {
  cabinet: Cabinet = { id: 0, name: '', adresse: '', specialite: '', matriculefiscale:'',ville:'', telephone:'', horaires: [] };
  nouveauxHoraires: HoraireTravail[] = [{ jourSemaine: '', heureDebut: '', heureFin: '' }];

 

  constructor(private cabinetService: CabinetService,private router:Router) {}

  ajouterHoraire(): void {
    this.nouveauxHoraires.push({ jourSemaine: '', heureDebut: '', heureFin: '' });
  }

  ajoutCabinet(): void {
    this.cabinet.horaires= this.nouveauxHoraires;
    this.cabinetService.ajouterCabinet(this.cabinet)
      .subscribe(response => {
        this.router.navigate(['/']);
        console.log('Cabinet ajouté:', response);
      });
  }
}
