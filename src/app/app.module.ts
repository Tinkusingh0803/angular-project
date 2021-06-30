import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OnlineStudyModule} from './online-study/online-study.module';
import { WindowProjectComponent } from './window-project/window-project.component'
   @NgModule({
  declarations: [
    AppComponent,
    WindowProjectComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnlineStudyModule,RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
