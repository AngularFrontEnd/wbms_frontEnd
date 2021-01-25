import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  firstName;
  lastName;
  middleinitial;
  gender;
  contactNumber;
  email;
  address;
  userType;

  getEmployeeData(data: any){
    console.log(data);
    
  }
}
