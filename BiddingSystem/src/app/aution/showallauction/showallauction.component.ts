import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { error } from 'selenium-webdriver';
import { Auction } from '../../model/auction';
import { DatePipe } from '@angular/common';
//import { Socketservice } from '../../service/socket.service';

@Component({
  selector: 'app-showallauction',
  templateUrl: './showallauction.component.html',
  styleUrls: ['./showallauction.component.css']
})
export class ShowallauctionComponent implements OnInit {
//,private sockService:Socketservice
  auctionList: Auction[];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get('http://localhost:8080/auction').subscribe(data => {
      this.auctionList = data.json().data;
      console.log(JSON.stringify(this.auctionList));
    }, error => {
      alert(error);
    })
  }

}
