import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewUserComponent } from  '../newuser/newuser.component';
import { BodyComponent} from '../body/body.component';
import { NavBarComponent} from '../navbar/navbar.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, NewUserComponent, BodyComponent, NavBarComponent],
    bootstrap: [ AppComponent]
})
export class AppModule {}
