import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {MessageService} from '../message.service'
import {StoreService} from '../store.service'

@Component({
  selector: 'app-central-gov',
  templateUrl: './central-gov.component.html',
  styleUrls: ['./central-gov.component.css']
})
export class CentralGovComponent implements OnInit {

  constructor(
    private messageService:MessageService,
    private fb: FormBuilder,
    private storeService:StoreService
  ) { }

  creatDeparmentsForm=this.fb.group({
    createDeparmentsNames:[''],
    createDeparmentsBudgets:['']
  })

  nominateDepartmentHeaderForm=this.fb.group({
    headerName:[''],
    departmentName:['']
  })
  
  

  createDeparmentsSubmit(){
    let deparmentsNames=this.creatDeparmentsForm.value.createDeparmentsNames
    let budgets=this.creatDeparmentsForm.value.createDeparmentsBudgets
    console.log("createDeparmentsSubmit:",deparmentsNames)

    this.messageService.add("createDeparmentsSubmit:"+deparmentsNames)
    this.messageService.add("createDeparmentsSubmit:"+budgets)

    
    console.log("this.storeService.state.contractInstance",
                this.storeService.state.contractInstance)
    this.storeService.state.contractInstance().
      initGov(deparmentsNames,budgets,
      {from:this.storeService.state.web3.coinbase},(err,result)=>{
        if(err){
          console.log(err)
        }else{
          console.log(result)
        }
      })
  }

  nominateDepartmentHeaderSubmit(){
    let headerName=this.nominateDepartmentHeaderForm.value.headerName
    let departmentName=this.nominateDepartmentHeaderForm.value.departmentName
    this.messageService.add("nominateDepartmentHeaderSubmit:"+headerName)
    this.messageService.add("nominateDepartmentHeaderSubmit:"+departmentName)
  }

  ngOnInit() {
  }

}
