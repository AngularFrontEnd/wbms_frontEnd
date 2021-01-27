import { Component, OnInit } from '@angular/core';
import { CreateTransaction } from '../app-models';
import { Router } from '@angular/router';
import { WbmsService } from '../wbms.service';
import { AuthServiceService } from '../auth-service.service'


@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {

  constructor(
    private router: Router,
    private wbmsService: WbmsService,
    public authServiceService: AuthServiceService 
  ) { }

  private url = 'https://wbm-system.herokuapp.com/api/transaction/pending-transaction';


  pendingData;
  createTransaction: CreateTransaction[];
  customerArray = [];
  
  p: number = 1;

  ngOnInit(): void {
    this.authServiceService.authenticate('create-transaction')
    
    this.wbmsService.getData(this.url).subscribe(data => {
      this.pendingData = data;
      this.pendingData.forEach(element => {
        this.customerArray.push(element.customer)
      });
    })
    console.log(this.customerArray);


 
  }
  getDataToView(data:any){
    
  }

}
