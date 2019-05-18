import { Component, OnInit } from '@angular/core';
import { ShowingService } from '../shared/showing.service';
import { LessonService } from '../shared/lesson.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
selector: 'app-lessons',
templateUrl: './lessons.component.html',
styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {


constructor(private showing:ShowingService, private lessonService:LessonService, 
  private toastr:ToastrService) { }

ngOnInit() {
  this.showing.addShow('lesson-list',true);
  this.showing.addShow('lesson',false);
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
getShow(what:string){
  return this.showing.getShow(what);
}

addNewLesson(){
  this.resetForm();
  this.showing.addShow('lesson-list',false);
  this.showing.addShow('lesson',true);
}
addSucces(succes:boolean){
  this.lessonService.refreshList();
  this.showing.addShow('lesson-list',true);
  this.showing.addShow('lesson',false);
  this.toastr.success('Operation successfully','Lesson Register');
}

showFormForUpdate(flag:boolean){
  this.showing.addShow('lesson-list',false);
  this.showing.addShow('lesson',true);
}

}
