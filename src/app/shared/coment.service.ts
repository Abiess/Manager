import { Injectable, Input } from '@angular/core';
import { collection, query, where, getDocs, onSnapshot, getFirestore } from "firebase/firestore";
import { AngularFirestore, QuerySnapshot } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { Comment} from '../model/coment';
import { UUID } from 'angular2-uuid';
import { uuidv4 } from '@firebase/util';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  //comments = this.store.collection('comment').valueChanges({ idField: 'id' }) as unknown as Observable<Comment[]>;
  
  constructor(private store: AngularFirestore) {

     
  }
  comments: Comment[] = [
    {
      id: 1,
      text: "This is the first comment",
      TaskId : "",
      createdAm: new Date(),
    },
    {
      id: 2,
      text: "This is the second comment", 
      TaskId : "",
      createdAm: new Date(),

    }
  ];
  
  //comment = this.store.collection<Comment>('comment').valueChanges();
  test = this.store.collection('comment').valueChanges() as Observable<Comment[]>;
  

  getAllComments(): Observable<Comment[]>
  {
   return this.test;
  }
  getTaskscomment(taskId : string) : Observable<Comment[]> 
  {
    const collectionRef = collection(getFirestore(), "comment");
    const q = query(collectionRef, where("TaskId","==",taskId));
   
    let comments : Comment[] = [];
    onSnapshot(q, (snapshot) => 
    {
      snapshot.docs.forEach(element => {
        comments.push(element.data() as Comment)
      });
    });
    
    return of(comments);
}
  postComment(commentText: string, commentId?: UUID, _taskId? : string
    ): 
  Observable<Comment | undefined> {
    const isNewComment: boolean = commentId === null || commentId === undefined;
    const newComment: Comment = {
      
      id: uuidv4(),
      text: commentText, 
      TaskId: _taskId,
      createdAm: new Date(),
      
    };
    
    if (isNewComment) {
      
      this.comments.push(newComment);
 
       this.store.collection('comment').add(newComment)
      return of(newComment);
    } else {
      this.comments = this.comments.map(comment => comment.id === commentId ? 
        {
          ...comment,
          text: commentText
        }
        : comment
      );
      const updatedComment = this.comments.find(comment => comment.id === commentId);
      
      return of(updatedComment);
    }
  }
}