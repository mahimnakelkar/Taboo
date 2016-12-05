import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class bodycomponentservice {
	constructor(private http: Http){}

	addCard(dummycard: any) {
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post('api/card/', JSON.stringify(dummycard), {headers: headers}).subscribe(res => {});

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
	setActiveFalse(id:string){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('api/card/', JSON.stringify({_id:id,active:false}), {headers: headers}).subscribe(res=>{});
	}

	incrementTeamScore(team:string){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.getTeamScore(team).subscribe(res => {
			res.map((ret_team:any)=>
	 		{		 			
	 			var score = ret_team.score +2;
				this.http.post('api/team/', JSON.stringify({name:team.toLowerCase(),score:score}), {headers: headers}).subscribe(res=>{});
			});
		});
	}

	decrementTeamScore(team:string){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.getTeamScore(team).subscribe(res => {
			res.map((ret_team:any)=>
	 		{	
				var score = ret_team.score -1;

				console.log(score);
				this.http.post('api/team/', JSON.stringify({name:team.toLowerCase(),score:score}), {headers: headers}).subscribe(res=>{});
			});
		});
	}
	decrementUserScore(user:any){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		var score = user.score -1;
		this.http.post('api/user/', JSON.stringify({_id:user._id,score:score}), {headers: headers}).subscribe(res=>{});
	}

	incrementUserScore(user:any){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		var score = user.score +2;
		this.http.post('api/user/', JSON.stringify({_id:user._id,score:score}), {headers: headers}).subscribe(res=>{});
	}

	getUserScore(username:string) {
		return this.http.get('api/user/?username=' + username).map(response => response.json());
	}


}
