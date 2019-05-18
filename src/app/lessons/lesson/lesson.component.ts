import { Component, OnInit, EventEmitter,Output  } from '@angular/core';
import { LessonService } from 'src/app/shared/lesson.service';
import { NgForm } from '@angular/forms';
import { ActivityService } from 'src/app/shared/activity.service';
import { TrainerService } from 'src/app/shared/trainer.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  @Output() addSucces: EventEmitter<boolean> = new EventEmitter;
  constructor(private lessonService:LessonService, 
    private activityService:ActivityService, 
    private trainerService:TrainerService) { }

  ngOnInit() {
    //this.resetForm();
    this.trainerService.refreshList();
    this.activityService.refreshList();
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
    this.lessonService.formData={
      id :null,
      name : '',
      date : '',
      max : null,
      available : null,
      trainer : null,
      activity : null
    }
  }
  onSubmit(form:NgForm){
    if(form.value.id == null){
      this.insertRecord(form);
    } else{
      this.updateRecord(form);
    }
    
    this.addSucces.emit(true);
  }

  insertRecord(form:NgForm){
    form.value.available = form.value.max;
    this.lessonService.postLesson(form.value).subscribe(res =>{
      console.log("succes");
    })
  }

  updateRecord(form:NgForm){
    this.lessonService.putLesson(form.value).subscribe(res =>{
      console.log("update succes");
    })
  }

}
