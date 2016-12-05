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
	user:{username:string,password:string,email:string,name:string,team:string,score:number};
	loginStatus: boolean = false;
	
	currentUser:{name:string, username:string, email:string, team:string};
	loginEmitter: EventEmitter<boolean> = new EventEmitter();
	currentUserEmitter: EventEmitter<{username:string,name:string,email:string,team:string }> = new EventEmitter();

	constructor(private userservice: newuserservice){
		this.loginEmitter = new EventEmitter();
		this.currentUserEmitter = new EventEmitter();
		this.loginStatus = false;
		this.loginEmitter.emit(this.loginStatus);
		this.user = {username:"",password:"",email:"",name:"",team:"",score:0};
		this.currentUser = {name:"", username:"", email:"",team:""};
		this.currentUserEmitter.emit(this.currentUser);

	}

	addUser(){
		console.log('add user test');
		console.log(this.password);
		if(this.password == "" || this.username == "" || this.email == "" || this.name == "") return;
		
		if(this.password === undefined || this.username === undefined || this.email === undefined || this.name === undefined) return;

		var rand = Math.floor(Math.random() * (2));
		if(rand == 0) this.team = "Red";
		else this.team = "Blue";

		this.currentUser = {
			name: this.name,
			username: this.username,
			email:this.email,
			team:this.team
		}

		this.currentUserEmitter.emit(this.currentUser);
		

		this.loginStatus = true;
		this.loginEmitter.emit(this.loginStatus);
		this.user = {
			username: this.username,
			password: this.password,
			email:this.email,
			name:this.name,
			team:this.team,
			score:10		
		};		
		this.userservice.addUser(this.user);	
	}	
}