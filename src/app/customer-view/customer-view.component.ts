import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  constructor(
    public authServiceService: AuthServiceService,
    private router: Router,
    private wbmsService: WbmsService,
    private route: ActivatedRoute
  ) { }

  private urlGet = 'https://wbm-system.herokuapp.com/api/customer/show/'
  id;

  ngOnInit(): void {
    const householdID: string = this.route.snapshot.queryParamMap.get(
      'householdID')
    console.log(householdID)

    this.authServiceService.authenticate("customer-view?householdID=" + householdID)


    this.wbmsService.getDatatoView(this.urlGet, householdID).subscribe(result => {
      // this.id = data;
      // console.log(this.id);
      console.log(result)
    })
  }

  navigate(){
    const parent: string = this.route.snapshot.queryParamMap.get(
      'parent')

    if(parent == '1'){
        this.router.navigate(['/create-transaction'])
    }else{

    }
  }

}
