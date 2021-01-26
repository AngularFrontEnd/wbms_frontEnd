import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router : Router) { }
  isAuthenticated;
  userLogged;

  authenticate(link) :boolean {
    if(localStorage.getItem ('Authorization') != null) {
      this.isAuthenticated =true;
      this.userLogged = localStorage.getItem("User");
      this.router.navigate([link])
      return true;
    }
    this.isAuthenticated =false;
    this.router.navigate(['']);
    return false;
  }
  
  logOut(){
    this.isAuthenticated= false
    this.router.navigate(['']);
  }
}


