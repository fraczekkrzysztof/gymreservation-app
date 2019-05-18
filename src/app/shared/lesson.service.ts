import { Injectable } from '@angular/core';
import { Lesson } from './lesson.model';
import { HttpClient } from '@angular/common/http';
import { LessonDto } from './lesson-dto.model';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  formData:LessonDto;
  list:Lesson[];
  readonly rootURL = "http://localhost:8080/api/lesson";
  constructor(private http:HttpClient) {}

  refreshList(){
    return this.http.get(this.rootURL).toPromise().then(
      res => {this.list = res as Lesson[]
    });
  }

  postLesson(formData:LessonDto){
    return this.http.post(this.rootURL,formData);
  }

  putLesson(formData:LessonDto){
    return this.http.put(this.rootURL,formData);
  }

  deleteLesson(id:number){
    return this.http.delete(this.rootURL+"/"+id);
  }

}
