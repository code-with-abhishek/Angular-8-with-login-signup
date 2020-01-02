import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	private notifier: NotifierService;
	userObject:any={};
  loginForm: FormGroup;
  invalidLogin: boolean = false;
	constructor(private formBuilder: FormBuilder, notifier: NotifierService) {
		this.notifier = notifier;
	}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.compose([Validators.required])],
      password: ['', Validators.required]
    });
		this.userObject = JSON.parse(localStorage.getItem('userDetails'));		
		console.log(this.userObject);

  }


	
	get frm() { return this.loginForm.controls; }


  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    const loginObject = {
      userName: this.loginForm.controls.userName.value,
      password: this.loginForm.controls.password.value
    }

	if(loginObject.userName && loginObject.password){
		if(loginObject.userName == this.userObject.user_name && loginObject.password == this.userObject.password){
			this.notifier.notify('success', 'UserLogged in successfully');
		}
		else{
			this.notifier.notify( 'error', 'Wrong Credentials');
		}
	}
 
  }



}
