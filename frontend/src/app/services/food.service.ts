import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { sample_foods } from 'src/data';

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
}
