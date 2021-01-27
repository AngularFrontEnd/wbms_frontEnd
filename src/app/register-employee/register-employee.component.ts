import { Component, OnInit } from '@angular/core';
import { CreateTransaction } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-register-employee',
  templateUrl: './register-employee.component.html',
  styleUrls: ['./register-employee.component.scss']
})
export class RegisterEmployeeComponent implements OnInit {

  constructor(
    private router: Router,
    private wbmsService: WbmsService,
    public authServiceService: AuthServiceService,
  ) { }

  private urlAddEmployee = 'https://wbm-system.herokuapp.com/api/staff/create';

  firstName;
  lastName;
  middleName;
  gender;
  contactNumber;
  email;
  address;
  usertype;

  



  ngOnInit(): void {
    this.authServiceService.authenticate('register-employee')
  }

  getEmployeeData(data: any) {
    // console.log(data);
    this.wbmsService.addEmployee(this.urlAddEmployee, data).subscribe(data => {
      this.router.navigate(['/employee-records']);  
      console.log(data);

    })
  }


}
