import { Component,OnInit } from '@angular/core';
import { FoodService } from '../services/food.service';
import { CommonModule } from '@angular/common';
import { Food, FoodTag } from '../shared/models/food';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { routes } from '../app.routes';
import { TagComponent } from '../tag/tag.component';
// import { RatingModule } from 'ngx-bootstrap/rating';

import { RatingModule} from 'ngx-bootstrap/rating';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SearchComponent, TagComponent, RatingModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})



export class HomeComponent {
    foodImgs:Food[] = [];
    foodTags:FoodTag[] = [];
    constructor(private foodservice:FoodService, private route:ActivatedRoute, private router: Router){ 
      this.foodTags = foodservice.getAllFoodTags()
    }
    ngOnInit(): void{
      this.route.params.subscribe(params=>
        {if(params['search-item']!==undefined){
        this.foodImgs = this.foodservice.getAll().filter(food=>food.name.toLocaleLowerCase().includes(params['search-item'].toLocaleLowerCase()))
        }else if(params['tag']!==undefined){
          this.foodImgs = this.foodservice.getFoodByTag(params['tag']);
        }else{
          this.foodImgs = this.foodservice.getAll()
        }
      }); 
    }

    addToCart(name: String):void{
      this.router.navigateByUrl("/food-details/"+name)
    }


} 
