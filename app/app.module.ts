import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewUserComponent } from  './new.user.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ AppComponent, NewUserComponent],
    bootstrap: [ AppComponent]
})
export class AppModule {}
