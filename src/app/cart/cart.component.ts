import { Component } from '@angular/core';
import { FoodPageComponent } from '../food-page/food-page.component';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { Food } from '../shared/models/food';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [FoodPageComponent, CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private route:ActivatedRoute, private cartService:CartService){}


  CartObjects: Food[] = [];
  price: number = 0;
  
  ngOnInit():void{
    this.CartObjects = this.cartService.getItemsInCart()
    this.price = this.cartService.getCartItemsTotalPrice()
  }

  removeItem(item: Food):void{
    this.cartService.removeItemFromCart(item);
    this.price = this.cartService.getCartItemsTotalPrice()
  }

  AlterQuantity(item: Food, addordelete: boolean):void{
    if (addordelete){
    this.cartService.addQuantity(item);
    }else{
      this.cartService.removeQuantity(item);
    }
    this.price = this.cartService.getCartItemsTotalPrice()
  } 

  removeAllItems():void{
    this.CartObjects = this.cartService.clearCart();
    this.price = this.cartService.getCartItemsTotalPrice()
  }


}
