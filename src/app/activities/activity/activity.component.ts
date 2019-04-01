import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/shared/activity.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private service: ActivityService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    console.log("dfsdfsdf");
  }

  resetForm(form?: NgForm){
    if(form != null){
      form.resetForm();
    }
    this.service.formData={
      id :null,
      symbol: '',
      name:''
    }
  }

  onSubmit(form:NgForm){
    if(form.value.id == null){
      this.insertRecord(form);
    } else{
      this.UpdateRecord(form);
    }
    
  }

  insertRecord(form:NgForm){
    this.service.postActivity(form.value).subscribe(res => {
      this.toastr.success('Inserted successfully','Activity Register');
      this.resetForm(form);
      this.service.refreshList();
    })
  }

  UpdateRecord(form:NgForm){
    this.service.putActivity(form.value).subscribe(res =>{
      this.toastr.info('Updated successfully','Activity Register');
      this.resetForm(form);
      this.service.refreshList();
    })
  }
}
