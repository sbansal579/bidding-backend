import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { HttpService } from '../../service/http.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product: Product;
  constructor(private httpService: HttpService) {
    this.product = new Product();
  }

  ngOnInit() {

  }
  addProduct() {
    this.httpService.post('http://localhost:8080/product', this.product).subscribe(e => {
      console.log(e.json());
      alert('Data added successfully');
    }, error => {
      console.log(error);
    });
  }

}
