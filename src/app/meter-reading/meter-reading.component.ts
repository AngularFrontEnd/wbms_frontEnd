import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AuthServiceService } from '../auth-service.service'


@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.scss']
})
export class MeterReadingComponent implements OnInit {


  
  constructor(
    private router: Router,
    public authServiceService: AuthServiceService ,
    )  { 
    
  }

  ngOnInit(): void {
    this.authServiceService.authenticate('meter-reading')
  }

  houseId;
  meterReading;

  cancelMeterReading() {
    this.router.navigate(['/create-transaction'])
  }

  getMeterReadingData(data: any) {
    console.log(data);

  }
}
