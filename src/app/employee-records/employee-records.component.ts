import { Component, OnInit } from '@angular/core';
import { Staff } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';


@Component({
  selector: 'app-employee-records',
  templateUrl: './employee-records.component.html',
  styleUrls: ['./employee-records.component.scss']
})
export class EmployeeRecordsComponent implements OnInit {

  constructor(
    private router: Router,
    private wbmsService: WbmsService
  ) { }

  private url = 'https://wbm-system.herokuapp.com/api/staff';

  staffData;
  staffs: Staff[];
  staffDataArray = [];


  ngOnInit(): void {
    this.wbmsService.getData(this.url).subscribe(data => {
      this.staffData = data;
      this.staffData.forEach(element => {
        let staff = { id: '', address: '', contactNumber: '', email: '', fullName: '', username: '', userType: '' }
        staff.id = element.id;
        staff.fullName = element.firstName + ' ' + element.lastName;
        staff.username = element.username
        staff.email = element.email;
        staff.contactNumber = element.contactNumber;
        staff.address =  element.address;
        staff.userType = element.userType;
        // push to array
        this.staffDataArray.push(staff)
      });
      console.log(this.staffDataArray);
      
    })

  }

}
