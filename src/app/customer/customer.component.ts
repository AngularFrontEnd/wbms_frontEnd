import { Component, OnInit } from '@angular/core';
import { Customer } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  constructor(
    private router: Router, 
    private wbmsService: WbmsService
    ) { }

  private urlGet = 'https://wbm-system.herokuapp.com/api/customer'; 
  private urlAdd ='https://wbm-system.herokuapp.com/api/customer/create' 

  addedCustomer;
  customerData;
  customers: Customer[];


  ngOnInit(): void {
    this.wbmsService.getData(this.urlGet).subscribe(data => {
      this.customerData = data;
      console.log(this.customerData)
    })

    // this.wbmsService.addData(this.urlAdd).(data=> {
    //   this.addedCustomer =data;
        
    // })
  }
}



