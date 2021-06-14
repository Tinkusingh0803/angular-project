import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {OnlineStudyComponent} from './online-study.component'
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    OnlineStudyComponent
  ],
  imports: [
    CommonModule,RouterModule
  ]
})
export class OnlineStudyModule { }
