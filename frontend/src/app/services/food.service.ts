import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood():Food[]{
    return sample_foods
  }
  getAllFoodsBySearchTerm(searchTerm:String){
     return this.getAllFood().filter(food=>food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodsByTags(tag: string) {
    return tag == 'All' ?
      this.getAllFood() :
      this.getAllFood().filter((food) => food.tags?.includes(tag));

  }

  getFoodById(foodId:string):Food[]{
     return this.getAllFood().filter((food)=>food.id===foodId) ?? new Food();
  }

  
}
