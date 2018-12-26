import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-gov-department',
  templateUrl: './gov-department.component.html',
  styleUrls: ['./gov-department.component.css']
})
export class GovDepartmentComponent implements OnInit {

  constructor(
    private messageService:MessageService,
    private fb: FormBuilder
  ) { }

  searchDepartmentForm=this.fb.group({
    searchDeparmentID:['']
  })

  transactionForm=this.fb.group({
    transactionDepartmentName:[''],
    transactionShopname:[''],
    transactionName:[''],
    transactionFee:[''],
    transactionHeadername:['']
  })

  searchDepartmentSubmit(){}
  transactionSubmit(){}

  ngOnInit() {
  }

}
