import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInfermierComponent } from './dashboard-infermier.component';

describe('DashboardInfermierComponent', () => {
  let component: DashboardInfermierComponent;
  let fixture: ComponentFixture<DashboardInfermierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardInfermierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardInfermierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
