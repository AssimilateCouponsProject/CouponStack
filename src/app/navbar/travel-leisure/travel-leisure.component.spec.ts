import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelLeisureComponent } from './travel-leisure.component';

describe('TravelLeisureComponent', () => {
  let component: TravelLeisureComponent;
  let fixture: ComponentFixture<TravelLeisureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelLeisureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelLeisureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
