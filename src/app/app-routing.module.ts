import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeRecordsComponent } from './employee-records/employee-records.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'dashboard', component: LandingPageComponent },
  { path: 'create-transaction', component: CreateTransactionComponent },
  { path: 'transaction', component: TransactionComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'employee-records', component: EmployeeRecordsComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
