import { Component } from '@angular/core';

@Component({
    selector: 'main-app',
    templateUrl: 'client/components/body/body.component.html'
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
	 	this.cards.push({color:"green",hints:["Clue1","Clue2"]});
	 }
}