import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnDestroy
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Comment } from "src/app/model/coment";
import { CommentService } from "src/app/shared/coment.service";



@Component({
  selector: "app-comment-form",
  templateUrl: "./comment-form.component.html",
  styleUrls: ["./comment-form.component.css"]
})
export class CommentFormComponent implements OnDestroy {
  private postCommentSubscription: Subscription = new Subscription();

  @Output() commentEditModeChanged: EventEmitter<boolean> = new EventEmitter<
    boolean
  >();
  @Input() isCommentInEditMode: boolean = false;
  @Input() comment: Comment | undefined;
  @Input() comments: Comment[] | undefined;
  @Input() index: number | undefined;

  constructor(private commentsService: CommentService) {}

  ngOnDestroy(): void {
    this.postCommentSubscription.unsubscribe();
  }

  postComment(form: NgForm, commentId?: number): void {
    const commentText: string = form.value.commentBox;

    if (
      form.valid &&
      commentText !== "" &&
      commentText !== undefined &&
      commentText !== null
    ) {
      this.postCommentSubscription.add(
        this.commentsService.postComment(commentText, commentId).subscribe({
          next: (updatedComment) => {
            if (this.index) {
              this.comments![this.index].text = updatedComment?.text;
            }
            form.resetForm();
          }
        })
      );
    }
    this.isCommentInEditMode = false;
    this.commentEditModeChanged.emit(false);
  }

  cancelComment(isEditMode: boolean): void {
    this.isCommentInEditMode = isEditMode;
    this.commentEditModeChanged.emit(isEditMode);
  }
}
