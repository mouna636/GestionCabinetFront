import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOrdonnanceSelectPatientComponent } from './ajout-ordonnance-select-patient.component';

describe('AjoutOrdonnanceSelectPatientComponent', () => {
  let component: AjoutOrdonnanceSelectPatientComponent;
  let fixture: ComponentFixture<AjoutOrdonnanceSelectPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutOrdonnanceSelectPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutOrdonnanceSelectPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
