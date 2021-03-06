import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LessonService } from 'src/app/shared/lesson.service';
import { ToastrService } from 'ngx-toastr';
import { TrainerService } from 'src/app/shared/trainer.service';
import { ActivityService } from 'src/app/shared/activity.service';
import { LessonDto } from 'src/app/shared/lesson-dto.model';
import { Lesson } from 'src/app/shared/lesson.model';
import { ReservationService } from 'src/app/shared/reservation.service';


@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  @Output() updating = new EventEmitter();
  @Output() reservation = new EventEmitter();

  constructor(private lessonService:LessonService, 
              private trainerService:TrainerService,
              private activityService:ActivityService,
              private reservationService:ReservationService,
              private toastr:ToastrService) { }

  ngOnInit() {
    this.lessonService.refreshList();
  }

  populateForm(les:Lesson){
    console.log("populateForm");
    var toUpdate:LessonDto = {
      id :les.id,
      name : les.name,
      date : les.date,
      max : les.max,
      available : les.available,
      trainer : les.trainer.id,
      activity : les.activity.id
    }
    console.log(toUpdate.id);
    console.log("populateForm");
    this.lessonService.formData = Object.assign({},toUpdate);
    this.updating.emit(true);
  }

  onDelete(id:number){
    this.lessonService.deleteLesson(id).subscribe(res => {
      this.lessonService.refreshList();
      this.toastr.warning('Delete successfully','Lesson Register');
    })
  }

  onReservation(les:Lesson){
    this.reservationService.setReservationParameter(true,les.id);
    this.reservation.emit(true);
  }

  onWaiting(les:Lesson){
    this.reservationService.setReservationParameter(false,les.id);
    this.reservation.emit(true);
  }

}
