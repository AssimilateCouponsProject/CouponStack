import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-of-the-day-coupons',
  templateUrl: './offer-of-the-day-coupons.component.html',
  styleUrls: ['./offer-of-the-day-coupons.component.css']
})
export class OfferOfTheDayCouponsComponent implements OnInit {

  imagePath1 : string="assets/img/uber eats.jpg"
  imagePath2: string="assets/img/swiggy offers.jpg"
  imagePath3 : string="assets/img/deals offers.jpg"
  imagePath4 : string="assets/img/zomato  offers1.jpg"
  imagePath5 : string="assets/img/uber eats.jpg"

  constructor() { }

  ngOnInit() {
  }

}
