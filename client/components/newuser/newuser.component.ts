import { Component } from '@angular/core';
import { newuserservice } from './newuser.component.service';

@Component({
    selector: 'new-user',
    templateUrl: 'client/components/newuser/newuser.component.html'
})

export class NewUserComponent{ 
	username: string;
	password: string;

	constructor(private newuserservice: newuserservice){}
	addUser(){
		var user = {
			username: 'eric',//this.username,
			password: 'bond'//this.password
		}

		this.newuserservice.addUser(user);
	}	
}