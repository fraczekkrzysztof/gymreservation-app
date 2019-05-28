import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReservationService } from 'src/app/shared/reservation.service';
import { ToastrService } from 'ngx-toastr';
import { LessonService } from 'src/app/shared/lesson.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  @Output() afterReservation:EventEmitter<boolean> = new EventEmitter;

  constructor(private reservationService:ReservationService,
              private lessonService:LessonService,
              private toastr:ToastrService
              ) { }

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
    if (this.reservationService.reservation){
      this.insertRecord(form);
    } else {
      this.insertWaitingRecord(form);
    }
    
  }

  insertRecord(form:NgForm){
    var toInsert = {
      id : 0,
      lesson : this.reservationService.lessonToReserve ,
      name : form.value.name,
      email : form.value.email,
      confirmed : false,
      waiting : 0,
      time : ''
    };
    this.reservationService.postReservation(toInsert).subscribe(res =>{
      this.toastr.success('Reservation successfully','new Reservation');
      this.lessonService.refreshList();
      this.afterReservation.emit(true);
    })
  }

  insertWaitingRecord(form:NgForm){
    var toInsert = {
      id : 0,
      lesson : this.reservationService.lessonToReserve ,
      name : form.value.name,
      email : form.value.email,
      confirmed : false,
      waiting : 0,
      time : ''
    };
    this.reservationService.postWaitingReservation(toInsert).subscribe(res =>{
  
      this.toastr.success('Waiting successfully','new Waiting');
      this.lessonService.refreshList();
      this.afterReservation.emit(true);
    })
  }
}
