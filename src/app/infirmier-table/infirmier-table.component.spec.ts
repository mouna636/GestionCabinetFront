import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmierTableComponent } from './infirmier-table.component';

describe('InfirmierTableComponent', () => {
  let component: InfirmierTableComponent;
  let fixture: ComponentFixture<InfirmierTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmierTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfirmierTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
