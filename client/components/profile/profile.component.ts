import { Component, Input } from '@angular/core';
import { AppComponent } from '../app/app.component';
import { Http, Headers, RequestOptionsArgs } from '@angular/http';
import { bodycomponentservice } from '../body/body.component.test.service';

@Component({
    selector: 'profile',
    templateUrl: 'client/components/profile/profile.component.html',
    styleUrls:["client/components/profile/profile.component.css"],
    providers:[bodycomponentservice]
})


export class ProfileComponent{
	@Input() currentUser:{username:string,name:string,email:string,team:string};
	userscore = 0;
	teamscore = 0;
	ngOnInit() {
		console.log("Profile Init");
		this.testservice.getUserScore(this.currentUser.username).subscribe(res =>
			{
					res.map((user:any)=>
					{
						
						this.userscore = user.score;
						
					})
				
			});

		this.testservice.getTeamScore(this.currentUser.team).subscribe(res =>
			{
					res.map((team:any)=>
					{
						
						this.teamscore = team.score;
						
					})
				
			});
	}

	constructor(private testservice: bodycomponentservice){}

}
