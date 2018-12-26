import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import {APP_BASE_HREF} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CentralGovComponent } from './central-gov/central-gov.component';
import { CitizenComponent } from './citizen/citizen.component';
import { GovDepartmentComponent } from './gov-department/gov-department.component';
import { MerchantComponent } from './merchant/merchant.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CentralGovComponent,
    CitizenComponent,
    GovDepartmentComponent,
    MerchantComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
