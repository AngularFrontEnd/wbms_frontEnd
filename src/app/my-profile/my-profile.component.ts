import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  constructor(
    public authServiceService: AuthServiceService, 
  ) { }

  ngOnInit(): void {
    this.authServiceService.authenticate('my-profile')
  }

}
