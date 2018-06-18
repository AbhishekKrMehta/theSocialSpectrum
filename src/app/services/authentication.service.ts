import { Injectable } from '@angular/core';
import { LoginCredentials } from "../interfaces/login-credentials";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

declare var firebase:any;

@Injectable()
export class AuthenticationService {

  temp_return1:boolean;

  constructor(private router : Router,
              private snackBar : MatSnackBar) { }

  signUpUser(user : LoginCredentials){
    console.log('email:'+ user.email);
    console.log('password'+ user.password1);
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password1).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error);
      // ...
    });
  }

  signInUser(user){
    var self = this;
    firebase.auth().signInWithEmailAndPassword(user.email,user.password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message; 
      console.log(error);
      self.snackBar.open("Please enter valid credentials", null, {
        duration: 3000,
        extraClasses: ['error']
      });
      // ...
    });
      firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
         this.router.navigate(['/', 'home']).then(nav => {
            console.log(nav); // true if navigation is successful
            this.snackBar.open("Successfully signed in", null, {
              duration: 3000,
              extraClasses: ['success']
            });
          }, err => {
            console.log(err) // when there's an error
          });
        
      } else {
        // No user is signed in.
      }
    });
  }

  isAuthenticated(){
    var user = firebase.auth().currentUser;    
    if (user) {
      // User is signed in.
      console.log("User is authenticated");
      return true;
    } else {
      // No user is signed in.
      return false;
    }
  }



  logOut(){
    firebase.auth().signOut();
    this.router.navigate(['/signin']);
  }

}
