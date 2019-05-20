import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from './reservation.model';
import { ReservationDto } from './reservation-dto.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  formData:ReservationDto;
  list:Reservation[];
  readonly rootURL = "http://localhost:8080/api/reservation";
  constructor(private http:HttpClient) { }

  refreshList(){
    return this.http.get(this.rootURL).toPromise().then(
      res => {this.list = res as Reservation[]
      });
  }

  refreshListForLesson(id:number){
    return this.http.get(this.rootURL + "/lesson/" + id).toPromise().then(
      res => {this.list = res as Reservation[]
      });
  }

  postReservation(formData:ReservationDto){
    return this.http.post(this.rootURL,formData);
  }
}
