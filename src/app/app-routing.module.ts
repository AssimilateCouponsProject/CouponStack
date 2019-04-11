import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes : Routes = [
    { path : 'navbar', component : NavbarComponent},
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
            { path: 'exclusive', component: ExclusiveComponent },
            { path: 'Todays Hot Coupons', component: OfferOfTheDayCouponsComponent },
            { path: 'Subscribe', component: SubscribeComponent }
        ],
    },
    {
        path: 'navbar',
        component: NavbarComponent,
        children:
            [
                { path: 'Baby Products', component: BabyProductsComponent },
                { path: 'Electronic', component: ElectronicComponent },
                { path: 'Clothing & Shoes', component: ClothingShoesComponent },
                { path: 'Travel & Leisure', component: TravelLeisureComponent },
                { path: 'Food & Groceries', component: FoodGroceriesComponent },
                { path: ' Beauty & Grooming', component: BeautyGroomingComponent }
            ],
    },
       { path : '', redirectTo: '/navbar',pathMatch : 'full'}    
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule { }
