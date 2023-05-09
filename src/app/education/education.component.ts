import { Component, OnInit } from '@angular/core';
import { School } from '../../types/school.type';
import { GraphqlService } from '../graphql.service';
import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  schools: School[] = [];

  constructor(private graphql: GraphqlService) {}

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_SCHOOLS_QUERY })
      .subscribe((response: any) => (this.schools = response.data.getSchools));
  }
}
