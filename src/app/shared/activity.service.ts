import { Injectable } from '@angular/core';
import { Activity } from './activity.model';
import { HttpClient } from '@angular/common/http';
import { Lesson } from './lesson.model';



@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  selectedActivity:Activity;
  selectedActivityLessons:Lesson[];
  formData: Activity;
  list: Activity[];
  readonly rootURL = "http://localhost:8080/api/activity";
  readonly rootURLforDetails = "http://localhost:8080/api/lesson/activity";
  
  constructor(private http:HttpClient) { }

  postActivity(formData:Activity){
    return this.http.post(this.rootURL,formData);
  }

  refreshList(){
    return this.http.get(this.rootURL).toPromise().then(res => this.list = res as Activity[]);
  }

  putActivity(formData:Activity){
    return this.http.put(this.rootURL,formData);
  }

  deleteActivity(id:number){
    return this.http.delete(this.rootURL+"/"+id);
  }

  getSelectedActivityLessons(id:number){
    return this.http.get(this.rootURLforDetails + "/"+id).toPromise().then(
      res => {
        this.selectedActivityLessons = null;
        if (Object.keys(res).length != 0){
          this.selectedActivityLessons = res as Lesson[];
        }
      }
    );
  }

}
