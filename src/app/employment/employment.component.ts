import { Component, OnInit } from '@angular/core';
import { Job } from '../../types/job.type';
import { GraphqlService } from '../graphql.service';
import { GET_JOBS_QUERY } from '../../graphql/queries/get-jobs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css'],
})
export class EmploymentComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private graphql: GraphqlService, private titleService: Title) {
    this.titleService.setTitle('Jeff Rosssi | Employment');
  }

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_JOBS_QUERY })
      .subscribe((response: any) => (this.jobs = response.data.getJobs));
  }
}
