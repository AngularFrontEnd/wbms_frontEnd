import { Component, OnInit } from '@angular/core';
import { CreateHousehold } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { AuthServiceService } from '../auth-service.service'

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
    private wbmsService: WbmsService,
    public authServiceService: AuthServiceService
  ) { }

  createHousehold: CreateHousehold[];


  private urlAddHousehold = 'https://wbm-system.herokuapp.com/api/customer/create';



  ngOnInit(): void {
    this.authServiceService.authenticate('register-new-household')
  }
  getHouseholdData(data: any) {
    this.wbmsService.addHousehold(this.urlAddHousehold, data).subscribe(data => {
      this.router.navigate(['/customer']);
      console.log(data);

    })

  }

}
