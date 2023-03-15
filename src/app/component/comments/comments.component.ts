import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/model/coment';
import { CommentService } from 'src/app/shared/coment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments$: Observable<Comment[]> | undefined;

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {
    this.comments$ = this.commentService.getAllComments();
  }
}
