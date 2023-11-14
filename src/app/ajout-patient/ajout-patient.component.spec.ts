import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPatientComponent } from './ajout-patient.component';

describe('AjoutPatientComponent', () => {
  let component: AjoutPatientComponent;
  let fixture: ComponentFixture<AjoutPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
