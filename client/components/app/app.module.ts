import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewUserComponent } from  '../newuser/newuser.component';
import { BodyComponent} from '../body/body.component';


@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, NewUserComponent, BodyComponent],
    bootstrap: [ AppComponent]
})
export class AppModule {}
