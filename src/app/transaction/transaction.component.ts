import { Component, OnInit } from '@angular/core';
import { TransactionRecords } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(
    private router: Router,
    private wbmsService: WbmsService
  ) { }
  private url = 'https://wbm-system.herokuapp.com/api/transaction/paid-transaction';

  paidTransactionData;
  transactionRecords: TransactionRecords[];
  paidTransactionArray = [];

  ngOnInit(): void {
    this.wbmsService.getData(this.url).subscribe(data => {
      this.paidTransactionData = data;
      this.paidTransactionData.forEach(element => {
        let sample = { houseNumber: '', customerName: '', address: '', meterReading: '', rendered_amount: '', total_amount: '', change: '', transacted_by: '' }
        sample.houseNumber = element.customer_id;
        sample.customerName = element.customer.firstName + ' ' + element.customer.lastName;
        sample.address = element.customer.address;
        sample.rendered_amount = element.customer.address;
        sample.meterReading = element.meterReading;
        sample.rendered_amount = element.rendered_amount;
        sample.total_amount = element.total_amount;
        sample.change = element.change;
        sample.transacted_by = element.transacted_by.firstName;
        //push to array
        this.paidTransactionArray.push(sample)
      });
    })
    console.log(this.paidTransactionArray);
  }

}
