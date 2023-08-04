import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Timestamp } from 'firebase/firestore';
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

constructor(private datePipe : DatePipe) {}
  

  editComment(): void {
    this.isCommentInEditMode = true;
  }

  deleteComment(): void {
    this.comments = this.comments!.splice(this.index!, 1);
  }

  disableCommentEditMode(isEditMode: boolean) {
    this.isCommentInEditMode = isEditMode;
  }
  formatDateFromTimestamp(timestamp: Date) {
    const date: Date = timestamp; // Convert Timestamp to Date
    var date1 = this.datePipe.transform(date, 'dd-MM-yy')
    return date1;// Format the Date using DatePipe
  }

}
