import { Component, OnInit, Sanitizer } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CabinetService } from '../services/cabinet.service';
import { Router } from '@angular/router';
import { FileHandle } from '../Models/file-handle.Model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ajout-cabinet',
  templateUrl: './ajout-cabinet.component.html',
  styleUrls: ['./ajout-cabinet.component.css']
})
export class AjoutCabinetComponent implements OnInit {
  cabinet: any = { cabinetImages: [] };
  addCabinetForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private cabinetService: CabinetService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.addCabinetForm = this.formBuilder.group({
      name: [''],
      adresse: [''],
      telephone: [''],
      specialite: [''],
      matriculefiscale: [''],
      ville: [''],
      codepostale: [''],
      email: [''],
      pwd: [''],
      cabinetImages: {}
    });
  }

  addCabinet() {
    const cabinetFormData = this.prepareFormData(this.cabinet);
    this.cabinetService.addCabinet(cabinetFormData).subscribe(
      () => {
        this.router.navigate(['']);
      }
    );
  }

  prepareFormData(cabinet: any): FormData {
    const formData = new FormData();
    formData.append('cabinet', new Blob([JSON.stringify(cabinet)], { type: 'application/json' }));

    if (cabinet.cabinetImages && Array.isArray(cabinet.cabinetImages)) {
      for (let i = 0; i < cabinet.cabinetImages.length; i++) {
        formData.append(
          'imageFile',
          cabinet.cabinetImages[i].file,
          cabinet.cabinetImages[i].file.name
        );
      }
    }

    return formData;
  }

  onFileSelected(event: any) {
    if (event.target.files) {
      const file = event.target.files[0];
      const fileHandle: FileHandle = {
        file: file,
        url: this.sanitizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      };
      this.cabinet.cabinetImages.push(fileHandle);
    }
  }
  removeImages(i:number){
    this.cabinet.cabinetImages.splice(i,1);

  }
}