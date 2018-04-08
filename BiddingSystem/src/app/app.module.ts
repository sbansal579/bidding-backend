import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AdduserComponent } from './user/adduser/adduser.component';
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http';
import { ShowalluserComponent } from './user/showalluser/showalluser.component'
import { HttpService } from './service/http.service';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ShowallproductComponent } from './product/showallproduct/showallproduct.component';
import { ShowallauctionComponent } from './aution/showallauction/showallauction.component';
import { AddauctionComponent } from './aution/addauction/addauction.component';
import { AuctiondetailComponent } from './auction/auctiondetail/auctiondetail.component';
import { AddBidComponent } from './auction/add-bid/add-bid.component';
//import { Socketservice } from './service/socket.service';


@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    ShowalluserComponent,
    AddproductComponent,
    ShowallproductComponent,
    ShowallauctionComponent,
    AddauctionComponent,
    AuctiondetailComponent,
    AddBidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
