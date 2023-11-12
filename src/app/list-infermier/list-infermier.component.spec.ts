import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListInfermierComponent } from './list-infermier.component';

describe('ListInfermierComponent', () => {
  let component: ListInfermierComponent;
  let fixture: ComponentFixture<ListInfermierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListInfermierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListInfermierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
