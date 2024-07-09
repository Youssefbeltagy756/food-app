import { Injectable } from '@angular/core';
import { Food, FoodTag } from '../shared/models/food'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }
  
  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '../assets/images/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '../assets/images/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '../assets/images/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '../assets/images/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '../assets/images/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '../assets/images/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }

  getFoodByTag(tagValue: string):Food[]{
    if(tagValue=="All" || tagValue=="all"){
    return this.getAll()
    }else{  
    return this.getAll().filter(food=>food.tags?.map(item=>item.toLocaleLowerCase()).includes(tagValue.toLocaleLowerCase()))
    }    
  }

  getQuantityOfTag(tagValue: String):number{
    return this.getAll().filter(food=>food.tags?.map(item=>item.toLocaleLowerCase()).includes(tagValue.toLocaleLowerCase())).length
  }

  getAllFoodTags(): FoodTag[] {

    let tagName: String[];
    tagName = Array.from(new Set(
      this.getAll()
        .map(food => food.tags || [])
        .reduce((acc, tags) => acc.concat(tags), []) 
    ));
    let tagsAndQuantities: { tagString: string, QuantityAvailible: number }[] = [];

    tagsAndQuantities.push({
      QuantityAvailible: this.getAll().length,
      tagString: "All"
    })


    tagName.forEach(item => {
      tagsAndQuantities.push({
        QuantityAvailible: this.getQuantityOfTag(item.toString()),
        tagString: item.toString()
      })
    });
    return tagsAndQuantities
      
}

getFoodByName(name:String):Food{
  return this.getAll().find(food=>food.name.toLocaleLowerCase()==name) ?? new Food()
}
}

