import { Component } from '@angular/core';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent {

  inputValues: string[] = [];

  ajouterChamp() {
    this.inputValues.push('');
  }
}
