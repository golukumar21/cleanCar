import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'schedule/:id', component: ScheduleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
