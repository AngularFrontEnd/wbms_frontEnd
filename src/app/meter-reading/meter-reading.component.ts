import { Component, OnInit } from '@angular/core';
import { CreateTransaction } from '../app-models';
// import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { Router } from '@angular/router'; 
import { AuthServiceService } from '../auth-service.service'


@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.scss']
})
export class MeterReadingComponent implements OnInit {

  private urlAddMeterReading = 'https://wbm-system.herokuapp.com/api/transaction/create';
  
  constructor(
    private router: Router,
    private wbmsService: WbmsService,
    public authServiceService: AuthServiceService ,
    )  { 
    
  }
  today;
  recordedBy;
  ngOnInit(): void {
    this.recordedBy = localStorage.getItem("UserId");
    this.authServiceService.authenticate('meter-reading');
    let date = new Date();
    this.today = date.getFullYear() + '-' + date.getMonth() + 1 + '-' + date.getDate();
    this.authServiceService.authenticate('meter-reading');
  }

  customer_id;
  meterReading;
  reading_date;

  cancelMeterReading() {
    this.router.navigate(['/create-transaction'])
  }

  getMeterReadingData(data: any) {
    this.wbmsService.addMeterReading(this.urlAddMeterReading, data).subscribe(data => {
       this.router.navigate(['/transaction']);
      console.log(data);
    })
  }
}

