import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { CommonModule } from '@angular/common';
import { FoodTag } from '../shared/models/food';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css'
})
export class TagComponent {
  
  FoodTagObject: FoodTag[] = [];
  constructor(private router:Router, private home:HomeComponent){
    this.FoodTagObject = home.foodTags
  }

  value:String="";



  search(event: Event): void {
    const buttonElement = event.target as HTMLElement;
    if (buttonElement.childNodes[0].textContent!=null){
    this.value = buttonElement.childNodes[0].textContent.trim(); 
    this.router.navigateByUrl("/tag/"+this.value)
    }
  }


}
