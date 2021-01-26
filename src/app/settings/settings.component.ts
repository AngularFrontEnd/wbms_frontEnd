import { Component, OnInit } from '@angular/core';
import { Setting } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent implements OnInit {

  constructor(
    private router: Router, 
    private wbmsService: WbmsService,
    public authServiceService: AuthServiceService
  ) { }

  private urlGet = 'https://wbm-system.herokuapp.com/api/settings'; 
  
  settingData;
  settings: Setting [];


  ngOnInit(): void {
    this.authServiceService.authenticate('settings')

    this.wbmsService.getData(this.urlGet).subscribe(data =>{
      this.settingData =data
      
      // console.log(this.settingData);
      
    })
  }

}
