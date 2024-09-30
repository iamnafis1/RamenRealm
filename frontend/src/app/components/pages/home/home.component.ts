import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  form!: FormGroup;
  foods: Food[] = [];

  constructor(private fb: FormBuilder, private foodService: FoodService,activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
       if(params.searchTerm){
        this.foods=this.foodService.getAllFoodsBySearchTerm(params.searchTerm)
       }else{
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
