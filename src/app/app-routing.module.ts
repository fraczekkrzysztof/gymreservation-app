import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainersComponent } from './trainers/trainers.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'trainers', component:TrainersComponent},
  {path:'activities', component:ActivitiesComponent},
  //{path:'lessons', component:LessonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
