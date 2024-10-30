import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent {

  cartQunatity:number=0;
  user!:User; 
  constructor(private cartService:CartService,private userService:UserService){
    userService.userObservable.subscribe((newUser: User)=>{
      this.user=newUser
    })
  }

  ngOnInit(){
    this.cartService.getCartObservable().subscribe((cartItem)=>{
      this.cartQunatity=cartItem.totalCount
    })
  }
  logout(){
    this.userService.logout();
  }
  get isAuth(){
    return this.user.token
  }

}
