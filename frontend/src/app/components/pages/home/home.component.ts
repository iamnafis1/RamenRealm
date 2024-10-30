import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // foods: Food[] = [];

  // constructor(private foodService: FoodService,activatedRoute:ActivatedRoute) {
  //   let foodsObservale:Observable<Food[]>
  //   activatedRoute.params.subscribe((params)=>{
  //     console.log('Params:', params);
  //      if(params.searchTerm){
  //       foodsObservale=this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
  //      }else if(params.tag){
  //       foodsObservale=this.foodService.getAllFoodsByTags(params.tag)
  //       console.log('food',this.foods)

  //      }
  //      else{
  //        // Get all the food data
  //        foodsObservale = this.foodService.getAllFood();
  //        foodsObservale.subscribe((serverFoods)=>{
  //         this.foods=serverFoods
  //        })
  //      }
  //   })
  // }
  foods: Food[] = [];
  private foodsSubscription!: Subscription;

  constructor(private foodService: FoodService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.searchTerm) {
        this.foodsSubscription = this.foodService.getAllFoodsBySearchTerm(params.searchTerm)
          .subscribe(foods => {
            this.foods = foods;
          }, error => {
            // Handle errors, e.g., display error message to user
            console.error('Error fetching foods:', error);
          });
      } else if (params.tag) {
        this.foodsSubscription = this.foodService.getAllFoodsByTags(params.tag)
        .subscribe(foods => {
          this.foods = foods;
        }, error => {
          // Handle errors, e.g., display error message to user
          console.error('Error fetching foods:', error);
        });
      } else {
        this.foodsSubscription = this.foodService.getAllFood()
          .subscribe(foods => {
            this.foods = foods;
          }, error => {
            console.error('Error fetching foods:', error);
          });
      }
    });
  }

  ngOnDestroy() {
    if (this.foodsSubscription) {
      this.foodsSubscription.unsubscribe();
    }
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
