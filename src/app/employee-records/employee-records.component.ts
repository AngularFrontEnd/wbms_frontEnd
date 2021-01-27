import { Component, OnInit } from '@angular/core';
import { Staff } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { AuthServiceService } from '../auth-service.service'



@Component({
  selector: 'app-employee-records',
  templateUrl: './employee-records.component.html',
  styleUrls: ['./employee-records.component.scss']
})
export class EmployeeRecordsComponent implements OnInit {

  constructor(
    private router: Router,
    private wbmsService: WbmsService,
    public authServiceService: AuthServiceService 
  ) { }

  private url = 'https://wbm-system.herokuapp.com/api/staff';

  staffData;
  staffs: Staff[];
  staffDataArray = [];

  p: number = 1;


  ngOnInit(): void {
    this.authServiceService.authenticate('employee-records')   

    this.wbmsService.getData(this.url).subscribe(data => {
      this.staffData = data;
      this.staffData.forEach(element => {
        let staff = { id: '', address: '', contactNumber: '', email: '', fullName: '', username: '', usertype: '' }
        staff.id = element.id;
        staff.fullName = element.firstName + ' ' + element.lastName;
        staff.username = element.username
        staff.email = element.email;
        staff.contactNumber = element.contactNumber;
        staff.address =  element.address;
        staff.usertype = element.usertype;
        // push to array
        this.staffDataArray.push(staff)

      });
      console.log(this.staffDataArray);
      
    })

  }

}
