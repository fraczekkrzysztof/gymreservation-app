import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/shared/trainer.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor(private service: TrainerService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if (form != null){
      form.resetForm();
    }
    this.service.formData = {
      id:null,
      symbol:'',
      name:''
    }
  }

  onSubmit(form:NgForm){
    if (form.value.id == null){
      this.insertRecord(form);
    }
    else {
      this.updateRecord(form);
    }
    
  }

  insertRecord(form){
    this.service.postTrainer(form.value).subscribe(res => {
      this.toastr.success('Inserted Successfully', 'Trainer Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

  updateRecord(form){
    this.service.putTrainer(form.value).subscribe(res => {
      this.toastr.info('Inserted Successfully', 'Trainer Register');
      this.resetForm(form);
      this.service.refreshList();
    });
  }

}
