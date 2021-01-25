import { Component, OnInit } from '@angular/core';
import { Customer } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';


@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  constructor(
    private router: Router,
    private wbmsService: WbmsService
  ) { }

  private url = 'https://wbm-system.herokuapp.com/api/transaction'; //change later to api/transaction/pending-transaction
  // balhin sa create-transaction

  Tdata;
  customers: Customer[];
  Tarray = [];
  data;
  dataArray = [];

  ngOnInit(): void {
    // this.wbmsService.getData(this.url).subscribe(data => {
    //   this.Tdata = data;
    //   // console.log(data)
    //   this.Tdata.data.forEach(element => {
    //     // console.log(element.customer);
    //     this.Tarray.push(element.customer)
    //   });

    // })
    // console.log(this.Tarray);

    this.wbmsService.getData(this.url).subscribe(data => {
      this.data = data
      this.data.data.array.forEach(element => {
        console.log(element.data);
        // this.dataArray.push(element.)
      });
    })
  }
}
