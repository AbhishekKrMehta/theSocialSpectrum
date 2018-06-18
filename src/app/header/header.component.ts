import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public auth : AuthenticationService,
              public router : Router
              ){

  }

  isAuthenticated(){
   return this.auth.isAuthenticated();
  }

  reRoute(){
    if (this.isAuthenticated()) {
      this.router.navigateByUrl('/home');
    } else {
      this.router.navigateByUrl('/signin');
    }
  }

  onSignOut(){
    console.log("signout clicked!!")
    this.auth.logOut();
    this.router.navigateByUrl('/signOutMsg');
  }

}
