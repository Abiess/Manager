import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { MatDialog } from '@angular/material/dialog';
import { GroupDialogComponent, GroupDialogResult } from '../group-dialog/group-dialog.component';
import { Group } from '../../model/Group';
import { AuthService } from 'src/app/shared/auth.service';
import { map, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class GroupComponent implements OnInit {
  columnsToDisplay = [ 'name', 'description'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Group | null | undefined;
  displayedColumns: string[] = [ 'name', 'description', 'createdAm'];
  //dataSource: MatTableDataSource<Group> = new MatTableDataSource<Group>();
  subDisplayedColumns: string[] = [ 'jj', 'ju', 'jujj'];

  columns: string[] = [ 'Name', 'created by', 'Members', 'Projects','Action'];
  
  data!: Observable<Group[]>;
  filteredData!:  Observable<Group[]>;
  searchText: string = '';
  currentUser!: firebase.default.User | null;
 
  constructor(private dialog : MatDialog, 
    private authService : AuthService, 
    private store: AngularFirestore,
     ) {}
  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user ;
      if (this.currentUser){
        this.data = this.store.collection('group', ref => 
        ref.where('creator', '==', this.currentUser?.uid)).valueChanges({ idField: 'id' }) as Observable<Group[]>;
        this.filteredData = this.data;
      }
    })
    }

      filterData() {
        this.filteredData = this.data.pipe(
         map(d =>{
          return d.filter(l => l.name.toLowerCase().includes(this.searchText.toLowerCase()))
         }))
  }
 

  deleteGroup(group : Group){
    this.store.collection('group').doc(group.id).delete();
  }
  editGroup(group : Group){
   
   
       const dialogRef = this.dialog.open(GroupDialogComponent, {
         maxWidth: '100vw',
         maxHeight: '100vh',
         
         height: '100%',
         width: '100%',
         panelClass: 'full-screen-modal',
         data: {
           group: group,
           isCreateMode : false
         },
       });
       dialogRef.afterClosed().subscribe((result: GroupDialogResult) => {
         if (!result) {
           return;
         }
           this.store.collection('group').doc(group.id).update(group)
       })}
newGroup(): void {
  const dialogRef = this.dialog.open(GroupDialogComponent, {
    maxWidth: '100vw',
    maxHeight: '100vh',
    height: '100%',
    width: '100%',
    panelClass: 'full-screen-modal',
    data: {
      group: {},
      isCreateMode: true
      
    },
  });
  dialogRef.afterClosed().subscribe((result: GroupDialogResult) => {
      if (!result) {return;}
console.log("hier i am " + JSON.stringify(result))
         result.group.creator = this.currentUser?.uid;

         result.group.createdAm = new Date();
         this.store.collection('group').add(result.group);
    });
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
  

  
  