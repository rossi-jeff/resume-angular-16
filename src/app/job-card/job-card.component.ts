import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../../types/job.type';
import { FormatAddress } from '../../lib/format-address';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.css'],
})
export class JobCardComponent implements OnInit {
  @Input()
  job!: Job;
  address: string = '';

  ngOnInit(): void {
    this.address = this.job.Address ? FormatAddress(this.job.Address) : '';
  }
}
