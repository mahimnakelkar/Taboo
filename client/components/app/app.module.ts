import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewUserComponent } from  '../newuser/newuser.component';
import { BodyComponent} from '../body/body.component';
import { LoginComponent } from  '../login/login.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from '../profile/profile.component';
@NgModule({
    imports: [ BrowserModule, HttpModule , FormsModule],
    declarations: [ AppComponent, NewUserComponent, BodyComponent, LoginComponent, ProfileComponent],
    bootstrap: [ AppComponent],
    providers: []
})
export class AppModule {}
