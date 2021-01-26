import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.scss']
})
export class MeterReadingComponent implements OnInit {


  
  constructor(
    private router: Router,)  { 
    
  }

  ngOnInit(): void {
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
