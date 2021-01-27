import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit {

  firstName;
  lastName;
  middleinitial;
  gender;
  contactNumber;
  email;
  address;
  usertype;
  city;


  constructor(
    public authServiceService: AuthServiceService,
    private wbmsService: WbmsService,

  ) { }

  ngOnInit(): void {
    this.authServiceService.authenticate('update-customer')

    
  }

  
}
