import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

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
    public authServiceService: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.authServiceService.authenticate('update-customer')

    
  }

}
