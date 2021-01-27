import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { AuthServiceService } from  '../auth-service.service'
@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  constructor(
    public authServiceService: AuthServiceService
  ) { }

  private urlGet = 'https://wbm-system.herokuapp.com/api/customer'
  

  ngOnInit(): void {
    this.authServiceService.authenticate('customer-view')

  }

}
