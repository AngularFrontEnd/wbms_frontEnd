import { Component, OnInit } from '@angular/core';
import { CreateTransaction } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';

@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {

  constructor(
    private router: Router,
    private wbmsService: WbmsService
  ) { }

  private urlAddEmployee = 'https://wbm-system.herokuapp.com/api/staff/create';

  firstName;
  lastName;
  middleinitial;
  gender;
  contactNumber;
  email;
  address;
  usertype;



  ngOnInit(): void {
  }

  getEmployeeData(data: any) {
    this.wbmsService.addEmployee(this.urlAddEmployee, data).subscribe(data => {
      console.log(data);

    })
  }
  
  
}
