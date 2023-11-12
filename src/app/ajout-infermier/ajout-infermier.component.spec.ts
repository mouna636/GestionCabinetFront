import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutInfermierComponent } from './ajout-infermier.component';

describe('AjoutInfermierComponent', () => {
  let component: AjoutInfermierComponent;
  let fixture: ComponentFixture<AjoutInfermierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutInfermierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutInfermierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
