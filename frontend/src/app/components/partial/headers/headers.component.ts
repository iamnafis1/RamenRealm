import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {

  cartQunatity:number=0;

  constructor(private cartService:CartService){}

  ngOnInit(){
    this.cartService.getCartObservable().subscribe((cartItem)=>{
      this.cartQunatity=cartItem.totalCount
    })
  }

}
