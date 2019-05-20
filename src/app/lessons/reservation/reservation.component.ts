import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservationService } from 'src/app/shared/reservation.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private reservationService:ReservationService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
    this.reservationService.formData={
      id : null,
      lesson : null ,
      name : '',
      email : '',
      confirmed : false,
      waiting : null,
      time : ''
        }
  };

  onSubmit(form:NgForm){
    console.log("submit");
    this.insertRecord(form);
  }

  insertRecord(form:NgForm){
    this.reservationService.postReservation(form.value).subscribe(res =>{
      console.log("succes");
    })
  }
}
