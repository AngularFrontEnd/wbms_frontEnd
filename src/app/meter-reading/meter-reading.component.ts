import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthServiceService } from '../auth-service.service'
import { CreateTransaction } from '../app-models';
import { WbmsService } from '../wbms.service';


@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.scss']
})
export class MeterReadingComponent implements OnInit {

  private urlAddMeterReading = 'https://wbm-system.herokuapp.com/api/transaction/create';
  
  constructor(
    private router: Router,
    public authServiceService: AuthServiceService ,
    private wbmsService: WbmsService
    )  { }

  recordedBy;
  ngOnInit(): void {
    this.authServiceService.authenticate('meter-reading')
    this.recordedBy = localStorage.getItem("UserId");
   
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

