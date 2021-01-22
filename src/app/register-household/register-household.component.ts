import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-household',
  templateUrl: './register-household.component.html',
  styleUrls: ['./register-household.component.scss']
})
export class RegisterHouseholdComponent implements OnInit {
  firstName;
  lastName;
  middleinitial;
  streetAddress;
  city;
  zipCode;
  contactNumber;
  email;


  constructor() { }

  ngOnInit(): void {
  }
  getHouseholdData(data: any){
    console.log(data);
    
  }

}
