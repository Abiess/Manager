
import { group } from '@angular/animations';
import { Component, Inject, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group } from 'src/app/model/Group';
import { AuthService } from 'src/app/shared/auth.service';
import { __values } from 'tslib';
import { ProjectDialogComponent, ProjectDialogResult } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-group-dialog',
  templateUrl: './group-dialog.component.html',
  styleUrls: ['./group-dialog.component.css']
})
export class GroupDialogComponent implements OnInit{
  isDropdownOpen = false;
  memberName: string = "";
  currentUser!: firebase.default.User | null;
  members: string[] = [];
  private backupGroup: Partial<Group> = { ...this.data.group};

  cancel(): void {
    this.data.group.description = this.backupGroup.description;
    this.data.group.name = this.backupGroup.name;
    this.data.group.members = this.backupGroup.members;
    this.data.group.createdAm = this.backupGroup.createdAm;
    this.data.group.deadline = this.backupGroup.deadline;
    this.data.group.creator = this.backupGroup.creator;
    this.dialogRef.close(this.data);
  }
  addGroup(group : Partial<Group>): void {
    // Add the member name to the array
    if (!group.members) {
      group.members = [];  // If it doesn't exist, create an empty array
    }
  
    this.members.push(this.memberName);
    group.members?.push({joinedAt: new Date().toString(), member: this.memberName})

  
  }
  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen;

  }

  deleteMember(index: number, group : Partial<Group>): void {
    if (!group.members) {
      group.members = [];  // If it doesn't exist, create an empty array
    }
  
    this.members.splice(index, 1);
    group.members?.splice(index, 1)
    
  }
  addProject(){
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '50%',
      width: '50%',
      panelClass: 'full-screen-modal',
      data: {
        project: {},
        isCreateMode: true
        
      },
    });
    dialogRef.afterClosed().subscribe((result: ProjectDialogResult) => {
        if (!result) {return;}
  
           result.project.creator = this.currentUser?.uid;
  
           result.project.createdAm = new Date();
           this.store.collection('project').add(result.project);
           
      });
  }
    
  

constructor(
  public dialogRef: MatDialogRef<GroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData,
      private authService : AuthService, 
      private dialog : MatDialog,
      private store: AngularFirestore,){}
    


  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user ;
     
    })
    }
  

onNoClick(): void {
  this.dialogRef.close();
}
}
export interface TaskDialogData {
  group: Partial<Group>;
  enableDelete: boolean;
  isCreateMode : boolean;
}
export interface GroupDialogResult {
  group: Group;
  delete?: boolean;
  
}


