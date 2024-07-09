import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartComponent } from './cart/cart.component';


export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'search/:search-item',component: HomeComponent},
    {path: 'tag/:tag', component: HomeComponent},
    {path: 'food-details/:food-item', component: FoodPageComponent},
    {path: 'cart/:food-item', component: CartComponent},
    {path: '**', component: HomeComponent },
];
