import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgAisModule } from 'angular-instantsearch';

//import { AngularFireModule } from '@angular/fire';

//import { AngularFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgAisModule.forRoot(),
    BrowserModule,
   // AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
