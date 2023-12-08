import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;
  user$: Observable<firebase.default.User | null>;


  constructor(private fireauth: AngularFireAuth, private router : Router) {
    
    this.user$ = this.fireauth.authState;
   }

   signIn(email: string, password: string): Promise<firebase.default.auth.UserCredential> {
    return this.fireauth.signInWithEmailAndPassword(email, password);
  }
  signOut(): Promise<void> {
    return this.fireauth.signOut();
  }

   
   // login method
   

  // register method
  register(email: string, password: string, displayName: string  ) {
    this.fireauth
      .createUserWithEmailAndPassword(email, password)
      .then(
        userCred => {
          if (userCred.user) {
            userCred.user.updateProfile({ displayName: displayName })
              .then(() => {
                alert('Profile updated successfully ' + displayName);
                
              })
              .catch(error => {
                console.error('Error updating profile:', error);
              });
          }
        },
        err => {
          alert(err.message);
          this.router.navigate(['/errorPage']);
        }
      );
  }

  // sign out
 

  // forgot password
  forgotPassword(email : string) {
      this.fireauth.sendPasswordResetEmail(email).then(() => {
        this.router.navigate(['/varify-email']);
      }, err => {
        alert('Something went wrong');
      })
  }

  // email varification
  sendEmailForVarification(user : any) {

    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/varify-email']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/']);


    }, err => {
      alert(err.message);
    })
  }
  getCurrentUser(): Observable<firebase.default.User | null> {
    return this.user$;
  }
  
 
}