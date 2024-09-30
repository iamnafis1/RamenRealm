import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Initial rating (input from parent)
  @Input() readonly: boolean = false; // Control if it's readonly
  @Input() totalStars: number = 5; // Total stars (default is 5)
  @Output() ratingChange: EventEmitter<number> = new EventEmitter<number>(); // Output to parent when rating changes

  stars: (boolean | 'half')[] = []; // Update the type here

  constructor() {
    this.calculateStars();
  }

  ngOnChanges(): void {
    this.calculateStars();
  }

  // Calculate the filled stars based on the rating
  calculateStars(): void {
    this.stars = Array(this.totalStars).fill(false).map((_, index) => {
      if (index < Math.floor(this.rating)) {
        return true; // Full star
      } else if (index === Math.floor(this.rating) && this.rating % 1 !== 0) {
        return 'half'; // Half star
      } else {
        return false; // Empty star
      }
    });
  }
  

  // Handle clicking on stars if not readonly
  onRate(starIndex: number): void {
    if (!this.readonly) {
      this.rating = starIndex + 1; // Set the rating
      this.ratingChange.emit(this.rating); // Emit the rating change event
      this.calculateStars(); // Recalculate stars
    }
  }
}
