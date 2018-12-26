import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-citizen',
  templateUrl: './citizen.component.html',
  styleUrls: ['./citizen.component.css']
})
export class CitizenComponent implements OnInit {

  constructor(
    private messageService:MessageService,
    private fb: FormBuilder
    ) { }

  searchTransactionForm=this.fb.group({
    searchTransactionNum:['']
  })

  reportTransactionForm=this.fb.group({
    reportTransactionNum:['']
  })

  searchTransactionSubmit(){
    let searchTransactionNum=this.searchTransactionForm.value.searchTransactionNum
    this.messageService.add("searchTransactionSubmit:"+searchTransactionNum)
    
    
  }

  reportTransactionSubmit(){
    let reportTransactionNum=this.reportTransactionForm.value.reportTransactionNum
    this.messageService.add("reportTransactionSubmit:"+reportTransactionNum)
  }


  ngOnInit() {
  }

}
