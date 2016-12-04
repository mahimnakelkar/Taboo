import { Component, Input } from '@angular/core';
import { bodycomponentservice } from './body.component.test.service';

class card{
	color: string;
	hints: string[];
}

@Component({
    selector: 'main-app',
    templateUrl: 'client/components/body/body.component.html',
    styleUrls:["client/components/body/body.component.css"],
    providers:[bodycomponentservice]
})

export class BodyComponent{
	@Input() currentUser:{username:string,name:string,email:string,team:string};
	redWidth = "50%";
	blueWidth = "50%";
	f_showAddCard = "false";
	redTeamScore = 0;
	blueTeamScore = 0;

	 cards = [
	 	{_id:"1", answer:"ans", color:"blue",team:"blue", hints:["Clue1", "Clue2", "Clue3","Clue4"]}
	 ];
	 answer:string;
	 
	 clue1:string;
	 clue2:string;
	 clue3:string;
	 ans:string;



	ngOnInit()
	{
		console.log("User in Body is");
		console.log(this.currentUser);
		this.cards.pop();
	 	this.testservice.getAllCards(this.currentUser.team.toLowerCase()).subscribe(res =>
	 	{
	 		console.log(res)
	 		res.map((card:any)=>
	 		{		 			
	 			this.cards.push(card);
	 		})
	 	});
	 	console.log(this.currentUser);

	 	

	 	this.testservice.getTeamScore("red").subscribe(res =>
	 	{
	 		res.map((team:any)=>
	 		{		 			
	 			console.log("Red team is" + team.score);
	 			this.redTeamScore = team.score;
	 		})
	 	});

	 	this.testservice.getTeamScore("blue").subscribe(res =>
	 	{
	 		res.map((team:any)=>
	 		{		 			
	 			this.blueTeamScore = team.score;
	 			
	 			if(this.redTeamScore == 0 && this.blueTeamScore != 0) {
	 				this.blueWidth = "100%";
	 				this.redWidth = "1%";
	 			}
	 			else if(this.redTeamScore != 0 && this.blueTeamScore == 0) {
	 				this.blueWidth = "1%";
	 				this.redWidth = "100%";
	 			}
	 			else {
	 		
	 				var totalScore = this.blueTeamScore + this.redTeamScore;

	 				this.blueWidth = (this.blueTeamScore/totalScore).toString() + "%";
	 				this.redWidth = (this.redTeamScore/totalScore).toString() + "%";
	 			}

	 		})
	 	});

	 	



	 } 
	 
	 getColor(card = {color:"green"}) {
	 	return card.color;
	 }

	 submitAnswer(card:any, answer:string, inputs:HTMLInputElement) {
	 	console.log("Checking answer");
	 	console.log(card._id + " " + answer);

	 	var index = 0;
	 	for(var i = 0; i<this.cards.length;i++) {
	 		if(this.cards[i]._id == card._id) {
	 			console.log("Card Id Found");
	 			index = i;
	 			break;
	 		}
	 	}
	 	inputs.value = null;
	 	
	 	if(answer.toLowerCase() == card.answer.toLowerCase()) {
	 		answer = "";
	 		this.cards[index] = this.cards[0];
	 		this.cards.shift();
	 		inputs.value = null;
	 		this.testservice.setActiveFalse(card._id);
	 	}
	 }


	 showAddCard() {
	 	if(this.f_showAddCard == "true")	this.f_showAddCard = "false";
	 	else this.f_showAddCard = "true";
	 	console.log(this.f_showAddCard);
	 }

	 addCard() {
	 	var curr_team = "blue";
	 	var card_color = "#26529E"
	 	if(this.currentUser.team.toLowerCase() == "blue") {
	 		curr_team = "red";
	 		card_color = "#E04141";
	 	}
	 	
	 	var card = {
	 		hints:[this.clue1,this.clue2,this.clue3],
	 		answer:this.ans,
	 		active:true,
	 		team:curr_team,
	 		color:card_color,
	 		lat:0,
	 		lon:0

	 	}
	 	this.testservice.addCard(card);
	 }

	 constructor(private testservice: bodycomponentservice){}
}
