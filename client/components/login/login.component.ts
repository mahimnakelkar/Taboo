import { Component } from '@angular/core';

@Component({
    selector: 'login-user',
    templateUrl: 'client/components/login/login.component.html'
})

export class LoginComponent{
	login() {
		console.log('in the login component');
		
		
	}
}