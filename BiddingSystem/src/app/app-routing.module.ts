import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './user/adduser/adduser.component'
import { ShowalluserComponent } from './user/showalluser/showalluser.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { ShowallproductComponent } from './product/showallproduct/showallproduct.component';
import { AddauctionComponent } from './aution/addauction/addauction.component';
import { ShowallauctionComponent } from './aution/showallauction/showallauction.component';
import { AuctiondetailComponent } from './auction/auctiondetail/auctiondetail.component';
import { AddBidComponent } from './auction/add-bid/add-bid.component';

const routes: Routes = [
  { path: 'addUser', component: AdduserComponent },
  { path: 'allUser', component: ShowalluserComponent },
  { path: 'addProduct', component: AddproductComponent },
  { path: 'allProduct', component: ShowallproductComponent },
  { path: 'addAuction', component: AddauctionComponent },
  { path: 'showAllAuction', component: ShowallauctionComponent },
  { path: 'auction/:id', component: AuctiondetailComponent },
  { path: 'addBid/:auctionId', component: AddBidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
