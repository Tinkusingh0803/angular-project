import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OnlineStudyComponent} from './online-study/online-study.component'
import {AppComponent} from './app.component'
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
  ]
}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
