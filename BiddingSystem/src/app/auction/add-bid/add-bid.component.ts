import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { User } from '../../model/User';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-add-bid',
  templateUrl: './add-bid.component.html',
  styleUrls: ['./add-bid.component.css']
})
export class AddBidComponent implements OnInit {

  constructor(private httpService: HttpService, private route: ActivatedRoute, private router: Router) { }

  email: string;
  user: User;
  amount: number;
  auctionId: string;
  ngOnInit() {

    this.route.params.subscribe(e => {
      //console.log(JSON.stringify(e.auctionId));
      this.auctionId = e.auctionId;
    });
  }

  getUserInfo() {//user
    this.httpService.get('http://localhost:8080/user/email?emailId=' + this.email).subscribe(data => {
      this.user = data.json().data;
    },
      error => {
        alert(error);
      })
  }
  submit() {
    this.httpService.get('http://localhost:8080/bidding/bid/' + this.auctionId + '/' + this.user.id + '/' + this.amount).subscribe(
      data => {
        this.router.navigate(['auction',this.auctionId]);
        alert('Bid addded successfully');
      }, error => {
        alert(error);
      }
    )
  }
}
