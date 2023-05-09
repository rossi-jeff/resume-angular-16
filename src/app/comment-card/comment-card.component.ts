import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../types/comment.type';
import { getAuthor } from '../../lib/get-author';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.css'],
})
export class CommentCardComponent implements OnInit {
  @Input()
  comment!: Comment;
  author: string = '';

  ngOnInit(): void {
    this.author = getAuthor(this.comment);
  }
}
