import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOrdonnacePatientComponent } from './ajout-ordonnace-patient.component';

describe('AjoutOrdonnacePatientComponent', () => {
  let component: AjoutOrdonnacePatientComponent;
  let fixture: ComponentFixture<AjoutOrdonnacePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutOrdonnacePatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutOrdonnacePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
