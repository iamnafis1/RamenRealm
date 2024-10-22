import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class  CartComponent {
  cart!:Cart;

  constructor(private cartService:CartService,public foodService:FoodService){
    this.cartService.getCartObservable().subscribe((cart)=>{
      this.cart=cart;
    })
  }
  ngOnInit(){

  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString,10);
    this.cartService.changeQuantity(cartItem.food.id,quantity)
  }

  trackByCartItem(index: number,cartItem:CartItem): string {
    return cartItem.food.id; // Assuming each food item has a unique 'id'
  }

}
