import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinetPatientComponent } from './cabinet-patient.component';

describe('CabinetPatientComponent', () => {
  let component: CabinetPatientComponent;
  let fixture: ComponentFixture<CabinetPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinetPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinetPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
