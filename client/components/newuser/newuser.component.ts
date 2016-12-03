import { Component } from '@angular/core';
import { newuserservice } from './newuser.component.service';
import {EventEmitter} from '@angular/core';
@Component({
    selector: 'new-user',
    templateUrl: 'client/components/newuser/newuser.component.html',
    providers:[newuserservice],
    outputs:['loginEmitter','loginStatus','currentUserEmitter','currentUser']
   
})

export class NewUserComponent{ 
	name:string;
	email:string;
	username: string;
	password: string;
	team: string;
	testval: string = "hello";
	user:{username:string,password:string,email:string,name:string,team:string};
	loginStatus: boolean = false;
	
	currentUser:{name:string, username:string, email:string};
	loginEmitter: EventEmitter<boolean> = new EventEmitter();
	currentUserEmitter: EventEmitter<{username:string,name:string,email:string }> = new EventEmitter();

	constructor(private userservice: newuserservice){
		this.loginEmitter = new EventEmitter();
		this.currentUserEmitter = new EventEmitter();
		this.loginStatus = false;
		this.loginEmitter.emit(this.loginStatus);
		this.user = {username:"",password:"",email:"",name:"",team:""};
		this.currentUser = {name:"", username:"", email:""};
		this.currentUserEmitter.emit(this.currentUser);

	}

	addUser(){
		if(this.password == "" || this.username == "" || this.email == "") return;
		
		this.currentUser = {
			name: this.name,
			username: this.username,
			email:this.email
		}

		this.currentUserEmitter.emit(this.currentUser);
		
		if(Math.random() %2){
			this.team = "red";
		}
		else{
			this.team = "blue";
		}

		this.loginStatus = true;
		this.loginEmitter.emit(this.loginStatus);
		this.user = {
			username: this.username,
			password: this.password,
			email:this.email,
			name:this.name,
			team:this.team			
		};		
		this.userservice.addUser(this.user);	
	}	
}