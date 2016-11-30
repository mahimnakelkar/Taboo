import { Component } from '@angular/core';
import { newuserservice } from './newuser.component.service';

@Component({
    selector: 'new-user',
    templateUrl: 'client/components/newuser/newuser.component.html',
    providers:[newuserservice]
})

export class NewUserComponent{ 
	
	username: string;
	password: string;
	testval: string = "hello";

	constructor(private userservice: newuserservice){}
	addUser(){
		console.log('in user component');
		console.log(this.username);
		var user = {
			username: 'eric',//this.username,
			password: 'bond'//this.password
		}

		this.userservice.addUser(user).subscribe(res => {
			console.log(res);
		});
	}	

	getUser() {
		this.userservice.getUserByUsername('eric').subscribe(res =>{
			console.log(res);
		});
	}
}