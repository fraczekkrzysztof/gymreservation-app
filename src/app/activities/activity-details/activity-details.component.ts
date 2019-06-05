import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/shared/activity.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.css']
})
export class ActivityDetailsComponent implements OnInit {

  constructor(private service:ActivityService, private toastr:ToastrService) { }

  ngOnInit() {
  }

}
