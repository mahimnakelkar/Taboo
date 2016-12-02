import { Component, Input } from '@angular/core';
import { AppComponent } from '../app/app.component';
@Component({
    selector: 'profile',
    templateUrl: 'client/components/profile/profile.component.html',
    styleUrls:["client/components/profile/profile.component.css"]
})


export class ProfileComponent{
	@Input() currentUser:{username:string,name:string,email:string};

}
