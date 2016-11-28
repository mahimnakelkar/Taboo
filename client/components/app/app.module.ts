import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewUserComponent } from  '../newuser/newuser.component';
import { BodyComponent} from '../body/body.component';
import { LoginComponent } from  '../login/login.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, NewUserComponent, BodyComponent, LoginComponent],
    bootstrap: [ AppComponent]
})
export class AppModule {}
