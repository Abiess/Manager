import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './task/task.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { initializeFirestore } from '@firebase/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { TaskParentComponent } from './task-parent/task-parent.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { CommentsComponent } from './component/comments/comments.component';
import { CommentComponent } from './component/comments/comment/comment.component';
import { CommentFormComponent } from './component/comments/comment-form/comment-form.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

import { NavbarComponent } from './component/navbar/navbar.component';
import { ProfilComponent } from './component/profil/profil.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { SettingComponent } from './component/setting/setting.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomeComponent } from './component/home/home.component';
import { GroupComponent } from './component/group/group.component';
import { GroupDialogComponent } from './component/group-dialog/group-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { ProjectComponent } from './component/project/project.component';
import { ProjectDialogComponent } from './component/project-dialog/project-dialog.component';
import { SpinnerComponent } from './shared/spinner/spinner.component'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent,
    LoginComponent,
    RegisterComponent,
    TaskParentComponent,
    ForgotPasswordComponent,
    CommentsComponent,
    CommentComponent,
    CommentFormComponent,
    NavbarComponent,
    ProfilComponent,
    
    SidebarComponent,
    SettingComponent,
    HomeComponent,
    GroupComponent,
    GroupDialogComponent,
    ProjectComponent,
    ProjectDialogComponent,
    SpinnerComponent,
    

  
  ],
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    BrowserAnimationsModule, 
    MatIconModule,
    MatToolbarModule, 
    MatCardModule, 
    DragDropModule, 
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
   AngularFirestoreModule,
   AppRoutingModule,
   ReactiveFormsModule,
   MatMenuModule,
   MatBadgeModule,
   MatToolbarModule, 
   MatGridListModule,
   MatListModule,
   MatSelectModule,
   MatSidenavModule, 
   MatCheckboxModule,
   OverlayModule,
   ScrollingModule,
   MatTableModule,
   MatProgressSpinnerModule,
   



   
    
  ],
  providers: [
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
