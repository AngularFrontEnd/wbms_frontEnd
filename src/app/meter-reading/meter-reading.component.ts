import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.scss']
})
export class MeterReadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  houseId;
  meterReading;


  getMeterReadingData(data: any) {
    console.log(data);

  }
}
