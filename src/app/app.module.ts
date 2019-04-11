import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { OfferOfTheDayCouponsComponent } from './layout/offer-of-the-day-coupons/offer-of-the-day-coupons.component';
import { ExclusiveComponent } from './layout/exclusive/exclusive.component';
import { SubscribeComponent } from './layout/subscribe/subscribe.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodGroceriesComponent } from './navbar/food-groceries/food-groceries.component';
import { BeautyGroomingComponent } from './navbar/beauty-grooming/beauty-grooming.component';
import { BabyProductsComponent } from './navbar/baby-products/baby-products.component';
import { ElectronicComponent } from './navbar/electronic/electronic.component';
import { ClothingShoesComponent } from './navbar/clothing-shoes/clothing-shoes.component';
import { TravelLeisureComponent } from './navbar/travel-leisure/travel-leisure.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    OfferOfTheDayCouponsComponent,
    ExclusiveComponent,
    SubscribeComponent,
    NavbarComponent,
    FoodGroceriesComponent,
    BeautyGroomingComponent,
    BabyProductsComponent,
    ElectronicComponent,
    ClothingShoesComponent,
    TravelLeisureComponent,
    FooterComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
