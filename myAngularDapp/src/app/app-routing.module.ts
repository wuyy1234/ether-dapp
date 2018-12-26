import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CentralGovComponent} from './central-gov/central-gov.component';
import {CitizenComponent} from './citizen/citizen.component';
import {GovDepartmentComponent} from './gov-department/gov-department.component';
import {LoginComponent} from './login/login.component';
import {MerchantComponent} from './merchant/merchant.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'CentralGov',component:CentralGovComponent},
  {path:'Citizen',component:CitizenComponent},
  {path:'GovDepartment',component:GovDepartmentComponent},
  {path:'Merchant',component:MerchantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
