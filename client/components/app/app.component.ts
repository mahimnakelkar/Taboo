import { Component } from '@angular/core';
import {NewUserComponent} from '../newuser/newuser.component';
import {EventEmitter} from '@angular/core';

declare var w3IncludeHTML: any;

@Component({
	selector: "taboo-app",
    templateUrl: 'client/components/app/app.component.html',
    styleUrls:["client/components/app/app.component.css"],
    inputs: ['loginStatus']

})

export class AppComponent {
	
	

	page = "main";
	loginStatus = 'false';
	currentUser = {
		username: "",
		email: ""
	}


	changePage(state="main") {
		this.page = state;

	}

	changeLogin(loginStatus: boolean) {
		if(loginStatus == true) {
			this.loginStatus = 'true';
			this.page = "profile"
		}
		else this.loginStatus = 'false';
	}

	logout() {
		this.loginStatus = 'false';
		this.page = "login";
	}
	
}
