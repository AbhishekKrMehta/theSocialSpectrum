import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class SignUpDetailsService {

  constructor(public http:HttpClient) { }


  postSignUpDetails(user:any){
    return this.http.post('https://the-social-spectrum.firebaseio.com/userdata.json',user)
  }
}
