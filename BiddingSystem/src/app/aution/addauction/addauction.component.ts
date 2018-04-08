import { Component, OnInit } from '@angular/core';
import { Auction } from '../../model/auction';
import { Product } from '../../model/product';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-addauction',
  templateUrl: './addauction.component.html',
  styleUrls: ['./addauction.component.css']
})
export class AddauctionComponent implements OnInit {

  auction: Auction;
  productList: Product[];
  selectedProduct: string;
  constructor(private httpService: HttpService) {
    this.auction = new Auction();
  }

  ngOnInit() {
    this.httpService.get('http://localhost:8080/product').subscribe(e => {
      this.productList = e.json().data;
    });
  }

  addAuction() {

    console.log('selected product ', this.selectedProduct);
    let x = this.productList.find(s => {
      return s.id === this.selectedProduct;
    });
    console.log('x is: ' + x);
    this.auction.product = x;
    this.httpService.post('http://localhost:8080/auction', this.auction).subscribe(e => {
      alert('data added successfully.')
    }, error => {
      alert('error occured');
    });
  }
}
