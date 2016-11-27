import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `

    	
    	<header>
    		<nav class ="navbar navbar-inverse">
    			<div class = "navbar-header">			
    					<span>
    						<a href= "/" class="navbar-brand"> Taboo </a>
    					</span>
    					<span>
    						<a href= "/" class="navbar-brand login" style> Login </a>
    					</span>
    			</div>
    		</nav>
    	</header>
        <main>
        	<button (click) = "addCard()"> Add Card </button> <p>
        	<div *ngFor = "let card of cards">
	        	<div class = "flip-container">
	        		<div class = "flipper">
	        			<div class = "front" >
	        				<div class = "card" [style.background-color]="getColor(card)">
	        					<div class = "clue">
	        						<div *ngFor = "let hint of card.hints">
	        							<span class="hint"> {{ hint }} </span>
	        						</div>
	        					</div>
	        				</div>

	        			</div>
	        			<div class = "back">
	        				<div class = "card" [style.background-color]="getColor(card)">
	        					<div class="inputDiv">
	        						<input type = 'text' class='answerInput'/>
	        					</div>
	        				</div>

	        			</div>
	        		</div>
	        	</div>
        	</div>



        </main>
    `
})
export class AppComponent {
	
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
