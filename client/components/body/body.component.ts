import { Component } from '@angular/core';
import { bodycomponenttestservice } from './body.component.test.service';

class card{
	color: string;
	hints: string[];
}

@Component({
    selector: 'main-app',
    templateUrl: 'client/components/body/body.component.html',
    styleUrls:["client/components/body/body.component.css"],
    providers:[bodycomponenttestservice]
})

export class BodyComponent{
	 cards = [
	 	{color:"blue", hints:["Clue1", "Clue2", "Clue3","Clue4"]}
	 ];

	ngOnInit()
	{
	 	this.testservice.getAllCards().subscribe(res =>
	 	{
	 		console.log('on init');
	 		console.log(res);
	 		res.map((card:any)=>
	 		{
	 			this.cards.push(card);
	 		})
	 	});
	 } 
	 
	 getColor(card = {color:"green"}) {
	 	return card.color;
	 }

	 addCard() {
	 	var dummycard = {
	 		color: "red",
	 		hints: ["clue1","clue2"]
	 	}
	 	this.testservice.addCard(dummycard).subscribe(res => {console.log(res.status)});
	 }

	 getCard() {
	 	var id: string = '583df202a09009384018ef86';
	 	this.testservice.getCardById(id).subscribe(res => {
	 		console.log(res);
	 	})
	 }
	 constructor(private testservice: bodycomponenttestservice){}
}
