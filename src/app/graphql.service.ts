import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  private endPoint = 'https://resume-gql.jeff-rossi.com/graphql';

  constructor(private http: HttpClient) {}

  query(queryStr: string, variables: any = {}) {
    return this.http.post(
      this.endPoint,
      { query: queryStr, variables },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  mutation(mutationStr: string, variables: any) {
    return this.http.post(
      this.endPoint,
      { query: mutationStr, variables },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
