import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OnlineStudyModule} from './online-study/online-study.module'
   @NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnlineStudyModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
