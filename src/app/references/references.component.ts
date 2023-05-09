import { Component, OnInit } from '@angular/core';
import { Reference } from '../../types/reference.type';
import { GraphqlService } from '../graphql.service';
import { GET_REFERENCES_QUERY } from '../../graphql/queries/get-references';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css'],
})
export class ReferencesComponent implements OnInit {
  references: Reference[] = [];

  constructor(private graphql: GraphqlService) {}

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_REFERENCES_QUERY })
      .subscribe(
        (response: any) => (this.references = response.data.getReferences)
      );
  }
}
