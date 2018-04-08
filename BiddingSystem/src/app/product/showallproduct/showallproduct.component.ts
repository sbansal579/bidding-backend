import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-showallproduct',
  templateUrl: './showallproduct.component.html',
  styleUrls: ['./showallproduct.component.css']
})
export class ShowallproductComponent implements OnInit {

  productList: Product[];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.get('http://localhost:8080/product').subscribe(e => {
      this.productList = e.json().data;
    });
  }

}
