import { Component, OnInit } from '@angular/core';
import { Job } from '../../types/job.type';
import { School } from '../../types/school.type';
import { Reference } from '../../types/reference.type';
import { GraphqlService } from '../graphql.service';
import { GET_JOBS_QUERY } from '../../graphql/queries/get-jobs';
import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools';
import { GET_REFERENCES_QUERY } from '../../graphql/queries/get-references';
import { FormatName } from '../../lib/format-name';
import { Address } from '../../types/address.type';
import { FormatAddress } from '../../lib/format-address';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})
export class ResumeComponent implements OnInit {
  jobs: Job[] = [];
  schools: School[] = [];
  references: Reference[] = [];

  constructor(private graphql: GraphqlService) {}

  getName = (reference: Reference) => {
    return reference.Name ? FormatName(reference.Name) : '';
  };

  getPhone = (reference: Reference) => {
    return reference.Phones && reference.Phones.length > 0
      ? reference.Phones.map((p) => p.Number).join(', ')
      : '';
  };

  getEmail = (reference: Reference) => {
    return reference.Emails && reference.Emails.length > 0
      ? reference.Emails.map((e) => e.Address).join(', ')
      : '';
  };

  getAddress = (address: Address) => {
    return FormatAddress(address);
  };

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_JOBS_QUERY })
      .subscribe((response: any) => (this.jobs = response.data.getJobs));
    this.graphql
      .query({ query: GET_SCHOOLS_QUERY })
      .subscribe((response: any) => (this.schools = response.data.getSchools));
    this.graphql
      .query({ query: GET_REFERENCES_QUERY })
      .subscribe(
        (response: any) => (this.references = response.data.getReferences)
      );
  }
}
