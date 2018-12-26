import { Component, OnInit } from '@angular/core';
import {StoreService} from '../store.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private storeService:StoreService
  ) { }

  beginSubmit(){
    this.storeService.registerWeb3()
    this.storeService.getContractInstance()
    console.log("begin project in login!")

  }

  ngOnInit() {
  }

}
