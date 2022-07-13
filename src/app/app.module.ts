import { NgModule } from '@angular/core';

// i am importing iphone from US
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


// import { iphone } from 'US';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// angular is a javascript framework which can useful for develop the single apps
//single page appliation.....
