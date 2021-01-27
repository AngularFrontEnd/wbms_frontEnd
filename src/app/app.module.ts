import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {NgxPaginationModule} from 'ngx-pagination';

// import {NgxPrintModule} from 'ngx-print';
// import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CustomerComponent } from './customer/customer.component';
import { SettingsComponent } from './settings/settings.component';
import { RegisterHouseholdComponent } from './register-household/register-household.component';
import { EmployeeRecordsComponent } from './employee-records/employee-records.component';
import { MeterReadingComponent } from './meter-reading/meter-reading.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    CreateTransactionComponent,
    TransactionComponent,
    CustomerComponent,
    SettingsComponent,
    RegisterHouseholdComponent,
    EmployeeRecordsComponent,
    MeterReadingComponent,
    RegisterEmployeeComponent,
    CustomerViewComponent,
    UpdateCustomerComponent,
    MyProfileComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
