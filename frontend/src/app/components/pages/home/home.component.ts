import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(private foodService: FoodService,activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      console.log('Params:', params);
       if(params.searchTerm){
        this.foods=this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
       }else if(params.tag){
        this.foods=this.foodService.getAllFoodsByTags(params.tag)
        console.log('food',this.foods)

       }
       else{
         // Get all the food data
        this.foods = this.foodService.getAllFood();
       }
    })
  }



  // Use trackBy for better performance with *ngFor
  trackByID(index: number, food: Food) {
    return food.id;
  }
   // Handle rating change event from the child component
   onRatingChange(newRating: number, foodId: string): void {
    const food = this.foods.find(f => f.id === foodId);
    if (food) {
      food.stars = newRating;  // Update the food's rating
    }
  }

}
