import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { AbstractControl } from '@angular/forms';


const VALIDATOR_MESSAGES:any={
  required:'Should not be Empty',
  email:'Email is not valid',
  minlength: 'Field is too short',
  notMatch: 'Password and Confirm does not match'
}
@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit {
@Input() control!:AbstractControl;
@Input() showErrorsWhen:boolean=true;
errorMessages:string[]=[];
  constructor(){}

  ngOnInit(): void {
    this.control.statusChanges.subscribe(()=>{
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(()=>{
      this.checkValidation();
    })
  }
  ngOnChanges(change:SimpleChange){
    this.checkValidation();

  }

  checkValidation(){
    const errors=this.control.errors;
    if(!errors){
      this.errorMessages=[]
      return;
    }

    const errorKeys=Object.keys(errors) 
    this.errorMessages=errorKeys.map(key=>VALIDATOR_MESSAGES[key])
  }

}
