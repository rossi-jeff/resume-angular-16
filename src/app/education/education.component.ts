import { Component, OnInit } from '@angular/core';
import { School } from '../../types/school.type';
import { GraphqlService } from '../graphql.service';
import { GET_SCHOOLS_QUERY } from '../../graphql/queries/get-schools';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  schools: School[] = [];

  constructor(private graphql: GraphqlService, private titleService: Title) {
    this.titleService.setTitle('Jeff Rosssi | Education');
  }

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_SCHOOLS_QUERY })
      .subscribe((response: any) => (this.schools = response.data.getSchools));
  }
}
