import { Injectable } from '@angular/core';
import { Trainer } from './trainer.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  formData:Trainer;
  list:Trainer[];
  readonly rootURL = "http://localhost:8080/api/trainer";
  constructor(private http: HttpClient) { }

    refreshList(){
      return this.http.get(this.rootURL).toPromise().then(res => {this.list = res as Trainer[]});
   }

   postTrainer(formData:Trainer){
     return this.http.post(this.rootURL,formData);
   }

   putTrainer(formData:Trainer){
    return this.http.put(this.rootURL,formData);
   }

   deleteTrainer(id:number){
     return this.http.delete(this.rootURL + '/'+id);
   }
}
