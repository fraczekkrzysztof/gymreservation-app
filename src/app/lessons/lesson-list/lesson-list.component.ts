import { Component, OnInit } from '@angular/core';
import { LessonService } from 'src/app/shared/lesson.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css']
})
export class LessonListComponent implements OnInit {

  constructor(private service:LessonService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
