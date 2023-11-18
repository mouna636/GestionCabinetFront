import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutConsultationMainComponent } from './ajout-consultation-main.component';

describe('AjoutConsultationMainComponent', () => {
  let component: AjoutConsultationMainComponent;
  let fixture: ComponentFixture<AjoutConsultationMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutConsultationMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutConsultationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
