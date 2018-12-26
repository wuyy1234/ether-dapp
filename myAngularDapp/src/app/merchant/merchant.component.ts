import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {MessageService} from '../message.service'
import {StoreService} from '../store.service'

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  constructor(
    private messageService:MessageService,
    private fb: FormBuilder,
    private storeService:StoreService
  ) { }

  createMerchantForm=this.fb.group({
    createShopName:[''],
    createOwnerName:['']
  })

  getMerchantDetailForm=this.fb.group({
    getMerchantDetail:['']
  })

  createMerchantSubmit(){
    let shopName=this.createMerchantForm.value.createShopName;
    let ownerName=this.createMerchantForm.value.createOwnerName;

    this.messageService.add("create merchant: shop name:"+shopName)
    this.messageService.add("create merchant: owner name:"+ownerName)
    
    this.storeService.state.contractInstance().createMerchant(shopName,ownerName,
      {from:this.storeService.state.web3.coinbase},(err,result)=>{
        if(err){
          console.log(err)
        }else{
          console.log(result)
        }
      })
   
  }

  getMerchantDetailSubmit(){

  }

  ngOnInit() {
  }

}
