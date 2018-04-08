import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User'
import { Http, Headers } from '@angular/http'
import { Jsonp } from '@angular/http/src/http';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  user: User;
  constructor(private http: Http) {
    this.user = new User();
    this.user.joiningDate = new Date();
   // this.user.id = "3";
    //this.user.firstName = "karan1";
    //this.user.lastName = "kumar1";
    //this.user.email = "abc@gmail.com"
  }

  ngOnInit() {
  }

  submit() {
    /* this.http.post('http://localhost:8080/user', { data: this.user }).subscribe(e=>{

    }); */
   /*  this.http.get('http://localhost:8080/user/1').subscribe(e => {
      console.log(e);
    }); */

    let headers = new Headers();
    //    headers.set('Content-Type', 'application/x-www-form-urlencoded');
    headers.set('Content-Type', 'application/json');

    return this.http.post('http://localhost:8080/user', JSON.stringify(this.user), { headers: headers })
      .subscribe(e => {
        console.log(e);
        alert('user Added successfully');
      });
  }
}
