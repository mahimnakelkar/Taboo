import { Component } from '@angular/core';
import {NewUserComponent} from '../newuser/newuser.component';
import {EventEmitter} from '@angular/core';

declare var w3IncludeHTML: any;

@Component({
	selector: "taboo-app",
    templateUrl: 'client/components/app/app.component.html',
    styleUrls:["client/components/app/app.component.css"],
    inputs: ['loginStatus','user'],

})

export class AppComponent {
	
	page = "main";
	loginStatus = 'false';
	currentUser = {
		name:"",
		username: "",
		email: ""

	}

	
	constructor(){
		
	}

	changePage(state="main") {
		this.page = state;

	}

	changeLogin(loginStatus: boolean) {
		console.log("Change Login");
		if(loginStatus == true) {
			this.loginStatus = 'true';
			this.page = "profile";

		}
		else this.loginStatus = 'false';
	}

	changeCurrentUser(user:{username:string,email:string,name:string}) {
		this.currentUser = user;
		console.log("User follows");
		console.log(user);
	}

	logout() {
		this.loginStatus = 'false';
		this.page = "main";
	}
	
}
