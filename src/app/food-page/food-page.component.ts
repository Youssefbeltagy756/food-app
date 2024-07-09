import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Food } from '../shared/models/food';
import { FoodService } from '../services/food.service';
import { RouterLink } from '@angular/router';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';
import { RatingModule} from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RouterLink, CommonModule, RatingModule, FormsModule],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {

  FoodItem: String = "";
  FoodObject!: Food;
  constructor(private route:ActivatedRoute, 
    private foodService:FoodService,
    private router:Router,
    private cartService:CartService
  ){}

  ngOnInit():void{
    this.route.params.subscribe(param=>{
      if(param['food-item']!==undefined){
        this.FoodItem = param['food-item']
        this.FoodObject = this.foodService.getFoodByName(this.FoodItem.toLocaleLowerCase())
      }
    })
  }

  addToCart():void{
    if (this.FoodObject!==undefined){
    this.cartService.addToCart(this.FoodObject)
    }
    this.router.navigateByUrl("/cart/"+this.FoodObject?.name)
  }


}
