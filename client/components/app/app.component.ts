import { Component } from '@angular/core';
import {NewUserComponent} from '../newuser/newuser.component';
import {EventEmitter} from '@angular/core';



@Component({
	selector: "taboo-app",
    templateUrl: 'client/components/app/app.component.html',
    styleUrls:["client/components/app/app.component.css"],
    inputs: ['loginStatus']

})

export class AppComponent {
	
	page = "main";
	loginStatus = 'false';

	changePage(state="main") {
		this.page = state;

	}

	changeLogin(loginStatus: boolean) {
		if(loginStatus == true) this.loginStatus = 'true';
		else this.loginStatus = 'false';
		console.log(this.loginStatus + "Yo");
	}

	logout() {
		this.loginStatus = 'false';
	}
	
}
