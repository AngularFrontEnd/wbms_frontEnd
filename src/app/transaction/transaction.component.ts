import { Component, OnInit } from '@angular/core';
import { TransactionRecords } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(
    private router: Router,
    private wbmsService: WbmsService,
    public authServiceService: AuthServiceService 
  ) { }
  private url = 'https://wbm-system.herokuapp.com/api/transaction/paid-transaction';

  paidTransactionData;
  transactionRecords: TransactionRecords[];
  paidTransactionArray = [];

  page = 1;
  pageChange(page:Event){
    page= page;
  }

  ngOnInit(): void {
    this.authServiceService.authenticate('transaction')

    this.wbmsService.getData(this.url).subscribe(data => {
      this.paidTransactionData = data;
      this.paidTransactionData.forEach(element => {
        let transaction = { houseNumber: '', customerName: '', address: '', meterReading: '', rendered_amount: '', total_amount: '', change: '', transacted_by: '' }
        transaction.houseNumber = element.customer_id;
        transaction.customerName = element.customer.firstName + ' ' + element.customer.lastName;
        transaction.address = element.customer.address;
        transaction.rendered_amount = element.customer.address;
        transaction.meterReading = element.meterReading;
        transaction.rendered_amount = element.rendered_amount;
        transaction.total_amount = element.total_amount;
        transaction.change = element.change;
        transaction.transacted_by = element.transacted_by.firstName;
        //push to array
        this.paidTransactionArray.push(transaction)
      });
    })
    console.log(this.paidTransactionArray);
  }

}
