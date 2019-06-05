import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/shared/activity.service';
import { Activity } from 'src/app/shared/activity.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  constructor(private service:ActivityService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
    this.service.selectedActivity = null;
  }

  populateForm(act:Activity){
    this.service.formData = Object.assign({},act);
  }

  onDelete(id:number){
    this.service.deleteActivity(id).subscribe(
      (res ) =>{
        console.log(res);
          this.service.refreshList();
          this.toastr.warning('Delete successfully','Activity Register');
      },
      error => {
        this.toastr.error(error.error.message);
      } 
     )
  }
  onSelect(act:Activity){
    console.log("Selected!");
    this.service.selectedActivity = act;
    this.service.getSelectedActivityLessons(act.id);
  }

  isSelected(act:Activity){
    if (act==this.service.selectedActivity){
      return "selected";
    } else{
      return "";
    }
    
  }
}
