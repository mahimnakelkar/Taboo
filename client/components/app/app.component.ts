import { Component } from '@angular/core';

@Component({
	selector: "taboo-app",
    templateUrl: 'client/components/app/app.component.html',
    styleUrls:["client/components/app/app.component.css"]
})
export class AppComponent {
	page = "main";
	changePage(state="main") {
		this.page = state;
	}
	
}
