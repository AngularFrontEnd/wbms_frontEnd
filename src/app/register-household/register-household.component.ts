import { Component, OnInit } from '@angular/core';
import { createHousehold } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';

@Component({
  selector: 'app-register-household',
  templateUrl: './register-household.component.html',
  styleUrls: ['./register-household.component.scss']
})
export class RegisterHouseholdComponent implements OnInit {

  firstName;
  lastName;
  middleinitial;
  gender;
  contactNumber;
  email;
  address;
  usertype;
  city;

  clicked = false;

  constructor(
    private router: Router,
    private wbmsService: WbmsService
  ) { }

  private urlAddHousehold = 'https://wbm-system.herokuapp.com/api/customer/create';



  ngOnInit(): void {
  }
  getHouseholdData(data: any){
    this.wbmsService.addHousehold(this.urlAddHousehold, data).subscribe(data => {
      this.router.navigate(['/customer']);
      console.log(data);

    })
    
  }

}
