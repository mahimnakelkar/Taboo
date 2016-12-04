import { Component } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'login-user',
    templateUrl: 'client/components/login/login.component.html',
    outputs: ['logonEmitter','logonStatus','logonUser','logonUserEmitter']
})

export class LoginComponent{

	username:string;
	password:string;

	logonEmitter: EventEmitter<boolean> = new EventEmitter();
	logonStatus: boolean = false;

	logonUser:{username:string,email:string,name:string,team:string};
	logonUserEmitter: EventEmitter<{username:string,email:string,name:string,team:string}> = new EventEmitter();
	
	constructor(private http: Http){
		this.logonEmitter = new EventEmitter();
		this.logonStatus = false;
		this.logonEmitter.emit(this.logonStatus);

		this.logonUserEmitter = new EventEmitter();
		this.logonUser = {username:"",email:"",name:"",team:""};
	}

	login() {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('login', JSON.stringify({username:this.username,password:this.password}), {headers: headers}).map(response => response.json()).subscribe(res => {
			if(res.success){
			

				this.http.get('api/user/?username='+ this.username).map(response => response.json()).subscribe(res =>
	 			{
	 				res.map((user:any)=>
	 				{		 			
	 					
	 					this.logonUser = {
	 						username:user.username,
	 						name:user.name,
	 						email:user.email,
	 						team:user.team
	 					};
	 					this.logonUserEmitter.emit(this.logonUser);
	 					console.log(this.logonUser);
	 					console.log("User Sent");

	 					console.log('verified');
						this.logonStatus = true;
						console.log(this.logonStatus);
						this.logonEmitter.emit(this.logonStatus);
	 				})
	 			});

	 			this.logonUserEmitter.emit(this.logonUser);

				
			} else {
				console.log('not verified')
			}
		});	
	}
}