import { Injectable } from '@angular/core';
import { Food } from '../shared/models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Food[] = [];


  constructor() {}

  addToCart(food: Food): void {
    let item = this.items.find(i=>i.name===food.name);
    if (item===undefined){
    food.QuantityOrdered = 1;
    this.items.push(food);
    }else{
      if (item.QuantityOrdered!==undefined){
      item.QuantityOrdered += 1;
      }
    }
  }
  getItemsInCart():Food[]{
    return this.items
  }

  getCartItemsTotalPrice():number{
    if (this.items.length==0){
      return 0
    }else{
    let price: number=0;
    this.items.forEach(element => {
      price=price+element.price * (element.QuantityOrdered ?? 1)
    });
    return price
  }
  }

  removeItemFromCart(item:Food):void{
    let index: number = this.items.findIndex(i=>i.id===item.id);
    this.items.splice(index, 1)[0];
  }

  addQuantity(food: Food):void{
    let item = this.items.find(i=>i.name===food.name);
    if(item?.QuantityOrdered!==undefined){
    item.QuantityOrdered += 1;
    }
  }

  removeQuantity(food: Food):void{
    let item = this.items.find(i=>i.name===food.name);
    if(item?.QuantityOrdered!==undefined){
    item.QuantityOrdered -= 1;
    if(item.QuantityOrdered == 0){
      this.removeItemFromCart(food)
    }
    }
  }

  clearCart():Food[]{
    let food: Food[] = [];
    this.items = food;
    return this.getItemsInCart()
  }

}
