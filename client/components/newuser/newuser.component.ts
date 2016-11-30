import { Component } from '@angular/core';
import { newuserservice } from './newuser.component.service';
import {EventEmitter} from '@angular/core';
@Component({
    selector: 'new-user',
    templateUrl: 'client/components/newuser/newuser.component.html',
    providers:[newuserservice],
    outputs:['loginEmitter','loginStatus']
   
})

export class NewUserComponent{ 
	

	username: string;
	password: string;
	testval: string = "hello";
	user = {username:"",password:""};
	loginStatus: boolean = false;

	loginEmitter: EventEmitter<boolean> = new EventEmitter();

	constructor(private userservice: newuserservice){
		this.loginEmitter = new EventEmitter();
		this.loginStatus = false;
		this.loginEmitter.emit(this.loginStatus);
	}

	addUser(){
		this.loginStatus = true;

		this.loginEmitter.emit(this.loginStatus);

		console.log('in user component');
		console.log(this.username);
		this.user = {
			username: 'eric',//this.username,
			password: 'bond'//this.password
		};
		/*
		this.userservice.addUser(this.user).subscribe(res => {
			console.log(res);
		});
		*/
	}	

	getUser() {
		this.userservice.getUserByUsername('eric').subscribe(res =>{
			console.log(res);
		});
	}
}