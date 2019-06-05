import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../shared/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private service:ActivityService) { }

  ngOnInit() {
    this.service.selectedActivityLessons = null;
  }

}
