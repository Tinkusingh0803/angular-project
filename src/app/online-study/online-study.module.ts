import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {OnlineStudyComponent} from './online-study.component'
import { RouterModule } from '@angular/router';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import {FormsModule} from '@angular/forms'
// import {OnlineStudyRoutingModule} from './online-study-routing.module'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import {CarouselComponent} from './carousel/carousel.component'
 import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { InputTextModule } from "primeng/inputtext";
import {FileUploadModule} from 'primeng/fileupload';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database'

import { environment } from 'src/environments/environment';


 // import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    OnlineStudyComponent,
    CarouselComponent
   ],
  imports: [
    CommonModule,RouterModule,ButtonModule,RippleModule,FormsModule,

    HttpClientModule,
     InputMaskModule,
    InputNumberModule,
    InputTextModule,
     BrowserAnimationsModule,
     FileUploadModule,
     AngularFireDatabaseModule,
     AngularFireModule.initializeApp(environment.firebaseConfig)

  ],
  exports: [ ]
})
export class OnlineStudyModule { }
