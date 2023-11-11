import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutInfirmierComponent } from './ajout-infirmier.component';

describe('AjoutInfirmierComponent', () => {
  let component: AjoutInfirmierComponent;
  let fixture: ComponentFixture<AjoutInfirmierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutInfirmierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutInfirmierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
