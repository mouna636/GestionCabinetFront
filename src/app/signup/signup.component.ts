import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  request:any={};
  signupForm:any;
  constructor(private formBuilder:FormBuilder,private router:Router,private userService:UserServiceService) { }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      password:['']
     
       
    })
  }
  signup(){
    this.userService.register(this.request).subscribe(data => {
      console.log(data)
    this.router.navigate(["/login"]) 
    })
    
  }
}
