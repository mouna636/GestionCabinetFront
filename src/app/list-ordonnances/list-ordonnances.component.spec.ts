import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrdonnancesComponent } from './list-ordonnances.component';

describe('ListOrdonnancesComponent', () => {
  let component: ListOrdonnancesComponent;
  let fixture: ComponentFixture<ListOrdonnancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrdonnancesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrdonnancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
