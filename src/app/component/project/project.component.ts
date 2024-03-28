import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { map, Observable } from 'rxjs';
import { Project } from 'src/app/model/project';
import { AuthService } from 'src/app/shared/auth.service';
import { ProjectDialogComponent, ProjectDialogResult } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
 
})


export class ProjectComponent implements OnInit {
  columnsToDisplay = [ 'name', 'description'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Project | null | undefined;
  displayedColumns: string[] = [ 'name', 'description', 'createdAm'];
  columns: string[] = [ 'Name', 'created by', 'Tasks','Action'];
  
  data!: Observable<Project[]>;
  filteredData!:  Observable<Project[]>;
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
        this.data = this.store.collection('project', ref => 
        ref.where('creator', '==', this.currentUser?.uid)).valueChanges({ idField: 'id' }) as Observable<Project[]>;
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
 

  deleteProject(project : Project){
    this.store.collection('project').doc(project.id).delete();
  }
  editProject(project : Project){
   
   
       const dialogRef = this.dialog.open(ProjectDialogComponent, {
         maxWidth: '100vw',
         maxHeight: '100vh',
         
         height: '100%',
         width: '100%',
         panelClass: 'full-screen-modal',
         data: {
           project: project,
           isCreateMode : false
         },
       });
       dialogRef.afterClosed().subscribe((result: ProjectDialogResult) => {
         if (!result) {
           return;
         }
           this.store.collection('project').doc(project.id).update(project)
       })}
newProject(): void {
  const dialogRef = this.dialog.open(ProjectDialogComponent, {
    maxWidth: '100vw',
    maxHeight: '100vh',
    height: '100%',
    width: '100%',
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   // this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
  
  
