
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';
import { User } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  userDetails: any | null;

  constructor(private authService: AuthService, private router : Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.user$.pipe(
      map(user => {
        this.userDetails = user;
        if (user) {
          return true; // User is authenticated, allow access
          
        } else {
       
          // Redirect to the login page or another route
          return this.router.createUrlTree(['/login']);
          
          //return false; // or return a UrlTree to navigate to a different route
        }
       
      
      })
    );
  }
  
}

