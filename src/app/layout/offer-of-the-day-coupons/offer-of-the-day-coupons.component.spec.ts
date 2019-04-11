import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferOfTheDayCouponsComponent } from './offer-of-the-day-coupons.component';

describe('OfferOfTheDayComponent', () => {
  let component: OfferOfTheDayCouponsComponent;
  let fixture: ComponentFixture<OfferOfTheDayCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferOfTheDayCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferOfTheDayCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
