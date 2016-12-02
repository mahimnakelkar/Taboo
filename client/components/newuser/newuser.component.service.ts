import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class newuserservice {
	constructor(private http: Http){}

	addUser(user: any) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		var x = this.http.post("api/user", JSON.stringify(user), { headers: headers})//.map(response => response.json());
		if(x){				
			x.subscribe(res => {})
		}		
	}

	getUserByUsername(username: string): any[]{
		var x = this.http.get("/api/user/?username=" + username).map(response => response.json());
		if (x){
			x.subscribe(res => {
				return res;
			})
		}
		return [];
	}

	getUserByEmail(email: string): any[]{
		var x = this.http.get("/api/user/?email=" + email).map(response => response.json());
		console.log('x');
		console.log(x);
		if (x){
			x.subscribe(res => {
				console.log('res');
				console.log(res);
				return res;
			})
		}
		return [];
	}
}
