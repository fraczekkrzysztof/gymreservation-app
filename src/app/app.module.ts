import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activities/activity/activity.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivityService } from './shared/activity.service';
import { TrainersComponent } from './trainers/trainers.component';
import { TrainerComponent } from './trainers/trainer/trainer.component';
import { TrainerListComponent } from './trainers/trainer-list/trainer-list.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TrainerService } from './shared/trainer.service';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonListComponent } from './lessons/lesson-list/lesson-list.component';
import { LessonService } from './shared/lesson.service';


@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ActivityComponent,
    ActivityListComponent,
    TrainersComponent,
    TrainerComponent,
    TrainerListComponent,
    HomeComponent,
    NavigationComponent,
    LessonsComponent,
    LessonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ActivityService, TrainerService, LessonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
