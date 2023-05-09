import { Component, OnInit } from '@angular/core';
import { GraphqlService } from '../graphql.service';
import { Link } from '../../types/link.type';
import { GET_LINKS_QUERY } from '../../graphql/queries/get-links';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
})
export class LinksComponent implements OnInit {
  links: Link[] = [];

  constructor(private graphql: GraphqlService) {}

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_LINKS_QUERY })
      .subscribe((response: any) => (this.links = response.data.getLinks));
  }
}
