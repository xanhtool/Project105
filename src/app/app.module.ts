import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCkTKgaD73kxkWm1jaubsHcUEwWMn0PXtE",
  authDomain: "hiepbusinesscontacts.firebaseapp.com",
  databaseURL: "https://hiepbusinesscontacts.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "303502800662"
};


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
