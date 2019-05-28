import { Component, OnInit } from '@angular/core';
import { TrainerService } from 'src/app/shared/trainer.service';
import { ToastrService } from 'ngx-toastr';
import { Trainer } from 'src/app/shared/trainer.model';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css']
})
export class TrainerListComponent implements OnInit {

  constructor(private service:TrainerService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  onDelete(id:number){
    this.service.deleteTrainer(id).subscribe(res =>{
      this.service.refreshList();
      this.toastr.warning('Delete successfuly','Trainer Register');
    },
    error => {
      this.toastr.error(error.error.message);
      }
    )
  }
  PopulateTrainer(tr:Trainer){
    this.service.formData = Object.assign({},tr);
  }

}
