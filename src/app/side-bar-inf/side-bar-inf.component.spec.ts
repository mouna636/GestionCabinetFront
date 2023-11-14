import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarInfComponent } from './side-bar-inf.component';

describe('SideBarInfComponent', () => {
  let component: SideBarInfComponent;
  let fixture: ComponentFixture<SideBarInfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarInfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarInfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
