import { Component } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent {

  tags?:Tag[];
  selectedTag:string='All'
  constructor(foodService:FoodService){
    this.tags=foodService.getAllTags();

  }


  selectTag(tag: string) {
    console.log(`Selected tag: ${tag}`);
    this.selectedTag = tag; // Update the selected tag
  }

}
