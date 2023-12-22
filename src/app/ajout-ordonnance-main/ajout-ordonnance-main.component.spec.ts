import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutOrdonnanceMainComponent } from './ajout-ordonnance-main.component';

describe('AjoutOrdonnanceMainComponent', () => {
  let component: AjoutOrdonnanceMainComponent;
  let fixture: ComponentFixture<AjoutOrdonnanceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutOrdonnanceMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutOrdonnanceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
