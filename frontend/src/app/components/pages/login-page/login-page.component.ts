import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  loginForm!:FormGroup;
  isSubmitted = false;
  returnUrl='';
  constructor(private formBuilder: FormBuilder,private userService:UserService,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required]
    })
    this.returnUrl=this.activatedRoute.snapshot.queryParams.returnUrl
    //snapshot means the latest value of the activated route ,bu using snapshot we don't want to subscribe to it we can just get latest value .....and for getting value we wnt queryParams(which is everything after the ?)
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;
     this.userService.login({
      email:this.fc.email.value,
      password:this.fc.password.value
     }).subscribe(()=>{
      this.router.navigateByUrl(this.returnUrl)
     });

  }

}
