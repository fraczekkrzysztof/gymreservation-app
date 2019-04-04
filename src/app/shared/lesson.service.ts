import { Injectable } from '@angular/core';
import { Lesson } from './lesson.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  formData:Lesson;
  list:Lesson[];
  readonly rootURL = "http://localhost:8080/api/lesson";
  constructor(private http:HttpClient) {}

  refreshList(){
    return this.http.get(this.rootURL).toPromise().then(
      res => {this.list = res as Lesson[]
    });
  }
}
