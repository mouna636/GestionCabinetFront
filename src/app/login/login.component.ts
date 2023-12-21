import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  request:any={};
  loginForm:any;

  constructor(private formBuilder:FormBuilder,
    private router: Router,private userService :UserServiceService) {}

   ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    });
  }
  login(){     
    this.userService.authenticate(this.request).subscribe((data:any) => {
     console.log(data)
        this.router.navigate(['/dashboard-doctor']);
        }
     ) }
}
