import { Injectable } from '@angular/core';
import { GoogleAuthProvider, UserInfo } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { updateProfile } from 'firebase/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;


  constructor(private fireauth: AngularFireAuth, private router : Router) {
    this.initializeAuthStateListener();
   }

   private initializeAuthStateListener(): void {
    this.fireauth.authState.subscribe((user : any ) => {
      this.isLoggedIn = !!user;

      
    });
  }

   // login method
   login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then( res => {
        localStorage.setItem('token','true');
       
        this.router.navigate(['/task-parent']);

        // if(res.user?.emailVerified == true) {
        //   this.router.navigate(['/task-parent']);
        // } else {
        //   this.router.navigate(['/varify-email']);
        // }

    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }

  // register method
  register(email: string, password: string, displayName: string, lastName: string, company: string, phone: string  ) {
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
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
    
      this.isLoggedIn = false;
      this.router.navigate(['/']);
 
    }, err => {
      alert(err.message);
    })
  }

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
    console.log(user);
    user.sendEmailVerification().then((res : any) => {
      this.router.navigate(['/varify-email']);
    }, (err : any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  //sign in with google
  googleSignIn() {
    return this.fireauth.signInWithPopup(new GoogleAuthProvider).then(res => {

      this.router.navigate(['/taskParent']);
      localStorage.setItem('token',JSON.stringify(res.user?.uid));

    }, err => {
      alert(err.message);
    })
  }
  getLoggedInUser(): Promise<UserInfo | null> {
    return new Promise<UserInfo | null>((resolve, reject) => {
      this.fireauth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
          console.log("getLoggedInUser()" + JSON.stringify(user))
        } else {
          resolve(null);
        }
      }, (error) => {
        reject(error);
      });
    });
  }
  
}