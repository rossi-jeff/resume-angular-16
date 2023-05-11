import { Component, OnInit } from '@angular/core';
import { Comment } from '../../types/comment.type';
import { GraphqlService } from '../graphql.service';
import { GET_COMMENTS_QUERY } from '../../graphql/queries/get-comments';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private graphql: GraphqlService, private titleService: Title) {
    this.titleService.setTitle('Jeff Rosssi | Testimonials');
  }

  ngOnInit(): void {
    this.graphql
      .query({ query: GET_COMMENTS_QUERY })
      .subscribe(
        (response: any) => (this.comments = response.data.getComments)
      );
  }
}
