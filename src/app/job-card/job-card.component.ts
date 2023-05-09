import { Component, Input } from '@angular/core';
import { Job } from '../../types/job.type';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css'],
})
export class JobCardComponent {
  @Input()
  job!: Job;
}
