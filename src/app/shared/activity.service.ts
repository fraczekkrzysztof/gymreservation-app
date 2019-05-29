import { Injectable } from '@angular/core';
import { Activity } from './activity.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  selectedActivity:Activity;
  formData: Activity;
  list: Activity[];
  readonly rootURL = "http://localhost:8080/api/activity";
  
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

}
