import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  private readonly endPoint = 'https://resume-gql.jeff-rossi.com/graphql';

  constructor(private http: HttpClient) {}

  public query(options: { query: string; variables?: { [key: string]: any } }) {
    const { query, variables } = options;
    return this.http.post(
      this.endPoint,
      { query, variables },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  public mutation(options: {
    mutation: string;
    variables: { [key: string]: any };
  }) {
    const { mutation, variables } = options;
    return this.http.post(
      this.endPoint,
      { query: mutation, variables },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
