import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutConsultationV2Component } from './ajout-consultation-v2.component';

describe('AjoutConsultationV2Component', () => {
  let component: AjoutConsultationV2Component;
  let fixture: ComponentFixture<AjoutConsultationV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutConsultationV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutConsultationV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
