import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-paper-card',
  templateUrl: './paper-card.component.html',
  styleUrls: ['./paper-card.component.css'],
})
export class PaperCardComponent implements OnInit {
  @Input() consultationDiag: any;
  @Input() consultationFreq: any;
  @Input() consultationPression: any;
  @Input() consultationImc: any;
  @Input() consultationTaille: any;
  @Input() consultationMotif: any;
  @Input() consultationPoids: any;
  @Input() consultationResExam: any;
  @Input() consultationTemp: any;
  @Input() consultationObservation: any;
  @Input() chosenColor: any;
  colors = ['blue', 'green', 'yellow', 'brown', 'purple', 'orange'];

  ngOnInit(): void {
    this.getRandomColor();
  }
  // getColor(): string {
  //   if (this.consultationFreq) {
  //     return 'blue';
  //   } else if (this.consultationDiag) {
  //     return 'green';
  //   } else if (this.consultationPression) {
  //     return 'yellow';
  //   } else if (this.consultationImc) {
  //     return 'brown';
  //   } else if (this.consultationTaille) {
  //     return 'purple';
  //   } else if (this.consultationMotif) {
  //     return 'orange';
  //   } else if (this.consultationPoids) {
  //     return 'green';
  //   } else if (this.consultationResExam) {
  //     return 'blue';
  //   } else if (this.consultationTemp) {
  //     return 'orange';
  //   }

  //   return 'yellow';
  // }

  getRandomColor() {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    this.chosenColor = this.colors[randomIndex];
  }

  getTitle(): string {
    if (this.consultationFreq) {
      return 'Fréquence Cardiaque';
    } else if (this.consultationDiag) {
      return 'Diagnostique';
    } else if (this.consultationPression) {
      return 'Pression Artérielle';
    } else if (this.consultationImc) {
      return 'Indice de Masse Corporelle';
    } else if (this.consultationTaille) {
      return 'Taille';
    } else if (this.consultationMotif) {
      return 'Motif';
    } else if (this.consultationPoids) {
      return 'Poids';
    } else if (this.consultationResExam) {
      return 'Resultat Examen Clinique';
    } else if (this.consultationTemp) {
      return 'Temperature';
    }

    return '---';
  }

  getDescription(): string {
    if (this.consultationDiag) {
      return this.consultationDiag;
    }

    if (this.consultationFreq) {
      return this.consultationFreq + ' bpm';
    }

    if (this.consultationPression) {
      return this.consultationPression + ' mmHg';
    }

    if (this.consultationImc) {
      return this.consultationImc + ' kg/m²';
    }

    if (this.consultationTaille) {
      return this.consultationTaille + ' cm';
    }

    if (this.consultationMotif) {
      return this.consultationMotif;
    }

    if (this.consultationPoids) {
      return this.consultationPoids + ' kg';
    }

    if (this.consultationResExam) {
      return this.consultationResExam;
    }

    if (this.consultationTemp) {
      return this.consultationTemp + ' °C';
    }

    return '';
  }
}
