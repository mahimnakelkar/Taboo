import { Component } from '@angular/core';
import { bodycomponenttestservice } from './body.component.test.service';

@Component({
    selector: 'main-app',
    templateUrl: 'client/components/body/body.component.html',
    styleUrls:["client/components/body/body.component.css"],
    providers:[bodycomponenttestservice]
})

export class BodyComponent{
	// Connect this part to database later
	 cards = [
	 	{color:"green", hints:["Clue1","Clue2"]},
	 	{color:"red", hints:["Clue1"]},
	 	{color:"blue", hints:["Clue1", "Clue2", "Clue3","Clue4"]}
	 ];

	 
	 getColor(card = {color:"green"}) {
	 	return card.color;
	 }

	 addCard() {
	 	var dummycard = {
	 		color: "red",
	 		hints: ["clue1","clue2"]
	 	}
		this.cards.push({color:"green",hints:["Clue1","Clue2"]});
		//cards.push(dummycard);
	 	//this.testservice.addCard(dummycard).subscribe(res => {console.log(res.status)});
	 }

	 getCard() {
	 	var id: string = '583df202a09009384018ef86';
	 	this.testservice.getCardById(id).subscribe(res => {
	 		console.log(res);
	 	})
	 }

	 testval: string = 'initial';
	 constructor(private testservice: bodycomponenttestservice){}
		 
}
