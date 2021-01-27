import { Component, OnInit } from '@angular/core';
import { CreateTransaction } from '../app-models';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
// import { Router } from '@angular/router';
// import { Validators} from '@angular/common';
import { WbmsService } from '../wbms.service';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service'


@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.scss']
})
export class MeterReadingComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];

  emptyCustomerId = false;
  emptyMeterReading = false;
  emptyReadingDate = false;
  saving = false;




  dropdownSettings: IDropdownSettings

  private urlAddMeterReading = 'https://wbm-system.herokuapp.com/api/transaction/create';

  constructor(
    // private formBuilder: FormBuilder,
    private router: Router,
    private wbmsService: WbmsService,
    public authServiceService: AuthServiceService,
  ) {

  }
  today;
  recordedBy;
  meterReading: any;
  ngOnInit(): void {

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 1,
      closeDropDownOnSelection: true,
      allowSearchFilter: true
    };

    let urlGet = 'https://wbm-system.herokuapp.com/api/customer';
    let customerData;
    let infoArray = []
    this.wbmsService.getData(urlGet).subscribe(result => {
      customerData = result
      for (const data of customerData) {
        infoArray.push({ item_id: data.id, item_text: data.id + ' - ' + data.firstName + ' ' + data.middleName + ' ' + data.lastName })
      }
      this.dropdownList = infoArray;
    }, error => {
      console.log(error);
    })

    this.recordedBy = localStorage.getItem("UserId");
    let date = new Date();
    this.today = date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDate();
    this.authServiceService.authenticate('meter-reading');
  }

  customer_id;
  reading_date;

  cancelMeterReading() {
    this.router.navigate(['/create-transaction'])
  }

  getMeterReadingData(data: any) {
    if(this.formValidation(data) == true){
      this.saving = true
      console.log(data)
      let finalData = {
        recordedBy: data.recordedBy,
        customer_id: data.customer_id[0].item_id,
        meterReading: data.meterReading,
        reading_date: data.reading_date
      }
      this.wbmsService.addMeterReading(this.urlAddMeterReading, finalData).subscribe(data => {
        this.saving = false;
        this.router.navigate(['/create-transaction'])
      })
    }
    
  }


  formValidation(data) {
    this.emptyCustomerId = false;
    this.emptyMeterReading = false;
    this.emptyReadingDate = false;
    if (data.customer_id == "") {
      this.emptyCustomerId = true;
    }
    if (data.reading_date == "") {
      this.emptyReadingDate = true;
    }
    if (data.meterReading == null) {
      this.emptyMeterReading = true;
    }


    if (this.emptyCustomerId == false && this.emptyMeterReading == false && this.emptyReadingDate == false)
      return true;
  }
}

