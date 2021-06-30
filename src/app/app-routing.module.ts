import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {OnlineStudyComponent} from './online-study/online-study.component'
import {AppComponent} from './app.component'
import { CarouselComponent } from './online-study/carousel/carousel.component';
import { CommonModule } from '@angular/common';
 const routes: Routes = [
{
  path: '',
  component: AppComponent,
  children:[
    {path: '', component: OnlineStudyComponent},
    {
      path: 'tests-list',
      loadChildren: () => import('./online-study/online-study.module').then((m) => m.OnlineStudyModule),
    },
    {path: 'path', component: CarouselComponent}

  ]
}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
