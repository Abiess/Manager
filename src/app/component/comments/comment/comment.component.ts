import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/model/coment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  isCommentInEditMode = false;

  @Input() comment: Comment | undefined;
  @Input() index: number | undefined;
  @Input() comments: Comment[] | undefined;

  editComment(): void {
    this.isCommentInEditMode = true;
  }

  deleteComment(): void {
    this.comments = this.comments!.splice(this.index!, 1);
  }

  disableCommentEditMode(isEditMode: boolean) {
    this.isCommentInEditMode = isEditMode;
  }

}
