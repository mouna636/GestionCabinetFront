import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInfermierComponent } from './edit-infermier.component';

describe('EditInfermierComponent', () => {
  let component: EditInfermierComponent;
  let fixture: ComponentFixture<EditInfermierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInfermierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditInfermierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
