import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class bodycomponentservice {
	constructor(private http: Http){}

	addCard(dummycard: any) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('api/card/', JSON.stringify(dummycard), {headers: headers});

	}
	getTeamScore(team:string) {

		return this.http.get('api/team/?name='+ team.toLowerCase()).map(response => response.json());

	}
	getCardById(id: string){
		return this.http.get('api/card/?_id=' + id).map(response => response.json());
	}
	getAllCards(team: string){
		console.log(team)
		if(team){
			console.log('yes team')
			return this.http.get('api/card/?team=' + team+'&active=true').map(response => response.json());
		}
		console.log('no team')
		return this.http.get('api/card/').map(response => response.json());
	}
}