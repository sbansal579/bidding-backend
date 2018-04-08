import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { ActivatedRoute, Router } from '@angular/router'

import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';
import { Auction, } from '../../model/auction';

@Component({
  selector: 'app-auctiondetail',
  templateUrl: './auctiondetail.component.html',
  styleUrls: ['./auctiondetail.component.css']
})
export class AuctiondetailComponent implements OnInit {

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }
  auction: Auction;
  ngOnInit() {
    let id: string;
    this.route.params.subscribe(e => {
      console.log(JSON.stringify(e.id));
      id = e.id;
    });
    this.httpService.get('http://localhost:8080/auction/' + id).subscribe(data => {
      let info: any = data.json().data;
      console.log(info);
      this.auction = info;
    },
      error => {
        alert('error occured');
      });

    Observable.interval(2000)
      .subscribe((val) => {
        this.httpService.get('http://localhost:8080/auction/' + id).subscribe(data => {
          let info: any = data.json().data;
          console.log(info);
          this.auction = info;
        },
          error => {
            alert('error occured');
          });
      });
  }

  addBid() {
    this.router.navigate(['addBid', this.auction.id]);
  }
}


