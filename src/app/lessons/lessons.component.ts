import { Component, OnInit } from '@angular/core';
import { ShowingService } from '../shared/showing.service';
import { LessonService } from '../shared/lesson.service';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

 
  constructor(private showing:ShowingService) { }

  ngOnInit() {
    this.showing.addShow('lesson-list',true);
    this.showing.addShow('lesson',false);
  }
  getShow(what:string){
    return this.showing.getShow(what);
  }

  addNewLesson(){
    this.showing.addShow('lesson-list',false);
    this.showing.addShow('lesson',true);
  }
  addSucces(succes:boolean){
    console.log("emmit2");
    this.showing.addShow('lesson-list',true);
    this.showing.addShow('lesson',false);
  }

}
