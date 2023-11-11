import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCabinetComponent } from './ajout-cabinet.component';

describe('AjoutCabinetComponent', () => {
  let component: AjoutCabinetComponent;
  let fixture: ComponentFixture<AjoutCabinetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCabinetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutCabinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
