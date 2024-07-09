export class Food{
    id!:number;
    name!:String;
    price!:number;
    tags?:String[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:String;
    origins!:string[];
    cookTime!:string;
    QuantityOrdered?:number;
}

export class FoodTag{
    tagString!:String;
    QuantityAvailible!:number;
}
