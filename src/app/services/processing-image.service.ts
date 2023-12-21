import { Injectable } from '@angular/core';
import { FileHandle } from '../Models/file-handle.Model';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable, of } from 'rxjs'; // Importer 'of' depuis RxJS

@Injectable({
  providedIn: 'root'
})
export class ProcessingImageService {

  constructor(private sanitizer: DomSanitizer) { }

  public createImages(cabinet: any): Observable<any> {
    const cabinetImages: any[] = cabinet.cabinetImages;
    const cabinetImagesToFileHandle: FileHandle[] = [];
    
    for (let i = 0; i < cabinetImages.length; i++) {
      const imageFileData = cabinetImages[i];
      const imageBlob = this.dataURItoBlob(imageFileData.picByte, imageFileData.type);
      const imageFile = new File([imageBlob], imageFileData.name, { type: imageFileData.type });
      const finalFileHandle: FileHandle = {
        file: imageFile,
        url: this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };
      cabinetImagesToFileHandle.push(finalFileHandle);
    }
    
    cabinet.cabinetImages = cabinetImagesToFileHandle;
    // Envelopper le cabinet modifié dans un Observable et le renvoyer
    return of(cabinet);
  }

  public dataURItoBlob(picBytes: any, imageType: any) {
    const byteString = window.atob(picBytes);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intBArray = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      intBArray[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([intBArray], { type: imageType });
    return blob;
  }
} 
