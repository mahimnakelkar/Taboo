import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class newuserservice {
	constructor(private http: Http){}

	addUser(user: any) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post("api/user", JSON.stringify(user), { headers: headers}).subscribe(res => {})		
	}

	getUserByUsername(username: string){
		return this.http.get("/api/user/?username=" + username).map(response => response.json());
	}

	getUserByEmail(email: string){
		return this.http.get("/api/user/?email=" + email).map(response => response.json());		
	}
}
