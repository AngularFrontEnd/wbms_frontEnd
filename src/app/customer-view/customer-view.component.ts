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

  
  //variables (Customer)
  firstName;
  lastName;
  customerId;
  contactNum;
  email;
  address;
  pendingtransactionInfo;
  paidtransactionInfo;


  ngOnInit(): void {
    const householdID: string = this.route.snapshot.queryParamMap.get(
      'householdID')
    this.authServiceService.authenticate("customer-view?householdID=" + householdID)
    this.loadCustomerInfo(householdID);
    this.loadPendingTransaction(householdID);
    this. loadTransactionHistory(householdID);
    
  }

  navigate(){
    const parent: string = this.route.snapshot.queryParamMap.get(
      'parent')

    if(parent == '1'){
        this.router.navigate(['/create-transaction'])
    }else{
        this.router.navigate(['/customer'])
    }
  }

  loadCustomerInfo(householdID){
    let customerInfo;
    let urlGet = 'https://wbm-system.herokuapp.com/api/customer/show'
    this.wbmsService.getDatatoView(urlGet, householdID).subscribe(result => {
      customerInfo = result;
      this.firstName = customerInfo.firstName 
      this.lastName =  customerInfo.lastName;
      this.customerId = customerInfo.id;
      this.contactNum = customerInfo.contactNumber;
      this.email = customerInfo.email;
      this.address = customerInfo.address;
    })
  }


  loadPendingTransaction(householdID){
    let urlGet = 'https://wbm-system.herokuapp.com/api/transaction/show-pending-transaction'
    this.wbmsService.getDatatoView(urlGet, householdID).subscribe(result => {
      this.pendingtransactionInfo = result;
    })
  }

  loadTransactionHistory(householdID){
    let urlGet = 'https://wbm-system.herokuapp.com/api/transaction/show-paid-transaction'
    this.wbmsService.getDatatoView(urlGet, householdID).subscribe(result =>{
      this.paidtransactionInfo= result;
      console.log(this.paidtransactionInfo)
     })
  }
    

}


