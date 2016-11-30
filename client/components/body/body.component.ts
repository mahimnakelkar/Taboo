import { Component } from '@angular/core';
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
	 cards = [
	 	{color:"blue", hints:["Clue1", "Clue2", "Clue3","Clue4"]}
	 ];

	ngOnInit()
	{
		this.cards.pop();
	 	this.testservice.getAllCards().subscribe(res =>
	 	{
	 		res.map((card:any)=>
	 		{
	 			this.cards.push(card);
	 		})
	 	});
	 } 
	 
	 getColor(card = {color:"green"}) {
	 	return card.color;
	 }
	 constructor(private testservice: bodycomponentservice){}
}
