import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { HttpService } from '../../service/http.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-showalluser',
  templateUrl: './showalluser.component.html',
  styleUrls: ['./showalluser.component.css']
})
export class ShowalluserComponent implements OnInit {

  userList: User[];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get('http://localhost:8080/user').subscribe(e => {
      console.log(e.json());
      this.userList = e.json().data;
    });
  }

}
