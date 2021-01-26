import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  constructor(
    public authServiceService: AuthServiceService, 
  ) { }

  ngOnInit(): void {
    this.authServiceService.authenticate('customer-view')
  }

}
