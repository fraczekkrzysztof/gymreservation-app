import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/shared/lesson.service';
import { ToastrService } from 'ngx-toastr';
import { TrainerService } from 'src/app/shared/trainer.service';
import { ActivityService } from 'src/app/shared/activity.service';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  constructor(private lessonService:LessonService, 
              private TrainerService:TrainerService,
              private ActivityService:ActivityService,
              private toastr:ToastrService) { }

  ngOnInit() {
    this.lessonService.refreshList();
  }

}
