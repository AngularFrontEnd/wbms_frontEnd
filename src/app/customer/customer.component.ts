import { Component, OnInit } from '@angular/core';
import { Customer } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { AuthServiceService } from  '../auth-service.service'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})

export class CustomerComponent implements OnInit {
  constructor(
    private router: Router, 
    private wbmsService: WbmsService,
    public authServiceService: AuthServiceService 
    ) { }

  private urlGet = 'https://wbm-system.herokuapp.com/api/customer'; 

  customerData;
  customers: Customer[];


  ngOnInit(): void {
    this.authServiceService.authenticate('customer')
    this.wbmsService.getData(this.urlGet).subscribe(data => {
      this.customerData = data;
      console.log(this.customerData)
    })
    
  }

}



