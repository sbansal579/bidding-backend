import { User } from './User';
import { Product } from './product';
import { BidInformation } from './bidinformation';

export class Auction {
	id:string;
	product:Product;
	startTime:Date;
	endTime:Date;
	startingAmount:number;
	participants:User[];
	biddings:BidInformation[];
}