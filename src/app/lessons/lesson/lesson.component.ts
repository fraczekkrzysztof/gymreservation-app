import { Component, OnInit, EventEmitter,Output  } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  @Output() addSucces: EventEmitter<boolean> = new EventEmitter;
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("emmit");
    this.addSucces.emit(true);
  }

}
