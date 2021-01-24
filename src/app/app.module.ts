import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppRoutingModule } from './app-routing.module';
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
    CustomerViewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
