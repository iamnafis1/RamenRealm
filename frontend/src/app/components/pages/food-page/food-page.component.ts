import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {
  food: Food | undefined; 

   constructor(activatedRoute:ActivatedRoute,foodService:FoodService,private router: Router){
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        const foundFood = foodService.getFoodById(params.id);
        this.food = foundFood.length > 0 ? foundFood[0] : undefined; // Assign the first found food or undefined
      }
    });
   }

   addToCart() {
      console.log(`food added to cart!`);
       // Navigate to the cart page
     this.router.navigate(['/cart-page']);
  }
  onRatingChange(newRating: number, foodId: string): void {
    if (this.food) {
      this.food.stars = newRating;  // Update the food's rating
    }
  }

}
