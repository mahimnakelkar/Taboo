import { Component } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'login-user',
    templateUrl: 'client/components/login/login.component.html',
    outputs: ['logonEmitter','logonStatus']
})

export class LoginComponent{

	username:string;
	password:string;

	logonEmitter: EventEmitter<boolean> = new EventEmitter();
	logonStatus: boolean = false;

	constructor(private http: Http){
		this.logonEmitter = new EventEmitter();
		this.logonStatus = false;
		this.logonEmitter.emit(this.logonStatus);
	}

	login() {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('login', JSON.stringify({username:this.username,password:this.password}), {headers: headers}).map(response => response.json()).subscribe(res => {
			if(res.success){
				console.log('verified');
				this.logonStatus = true;
				console.log(this.logonStatus);
				this.logonEmitter.emit(this.logonStatus);

			} else {
				console.log('not verified')
			}
		});	
	}
}