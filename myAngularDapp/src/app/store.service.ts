import { Injectable } from '@angular/core';

import {MessageService} from './message.service'

import {address,ABI} from '../util/myContract'

/// <reference path="../util/type.d.ts" />
import  getWeb3 from 'getWeb3Module/getWeb3'
/// <reference path="../util/type.d.ts" />
import Web3 from 'getWeb3Module/Web3'

@Injectable({
  providedIn: 'root'
})



export class StoreService {
  //state is declared here
  state = {
    web3: {
        isInjected: false,
        web3Instance: null,
        networkId: null,
        coinbase: null,
        balance: null,
        error: null
    },
    contractInstance: null
  }

  data={
    Citizen:{
      reports:null 
      //can report a gov transaction
      //can supervise all gov transaction
    },

    citizens:null,

    GovDepartment:{
        departmentName:null,
        budget:0
    },
    GovDepartmentHead:{
        //resposible for a transaction
        name:0,
        department:null
    },
    Transaction:{
        //gov department
        department:null,
        //transaction name
        name:0,
        //transation fee
        fee:0,
        //merchants
        merchant:null,
        //store being reported times
        reportTimes:0
    },

    centralGov:null,
    transactions:null,
    govDepartments:null,
    govDepartmentHeads:null,
    merchants:null,

    Merchant:{
        //shop name
        shopName:null,
        //owner name
        ownerName:null
    }
  }
  

  

  constructor(
    private messageService:MessageService
  ) {}

  registerWeb3 () {
    this.messageService.add('registerWeb3 Action being executed')
    getWeb3.then(result => {
      this.messageService.add('committing result to registerWeb3Instance mutation')
      this.registerWeb3Instance(result)
    }).catch(e => {
      this.messageService.add('error in action registerWeb3'+ e)
    })
  }

  registerWeb3Instance (payload) {
    this.messageService.add('registerWeb3instance Mutation being executed'+payload)
    let result = payload
    let web3Copy = this.state.web3
    web3Copy.coinbase = result.coinbase
    web3Copy.networkId = result.networkId
    web3Copy.balance = parseInt(result.balance, 10)
    web3Copy.isInjected = result.injectedWeb3
    web3Copy.web3Instance = result.web3
    this.state.web3 = web3Copy
    this.messageService.add("web3Copy.coinbase:"+web3Copy.coinbase)
    this.messageService.add("web3Copy.networkId:"+web3Copy.networkId)
    this.messageService.add("web3Copy.balance:"+web3Copy.balance)
    this.messageService.add("web3Copy.isInjected:"+web3Copy.isInjected)
    this.messageService.add("web3Copy.web3Instance"+web3Copy.web3Instance)
    this.pollWeb3()
  }

  pollWeb3Instance(payload){
    this.messageService.add("pollWeb3Instance mutation being executed"+payload)
    this.state.web3.coinbase = payload.coinbase
    this.state.web3.balance = parseInt(payload.balance, 10)
  }

  pollWeb3(){
    console.log("on pollWeb3")
    let web3=window["web3"]
    web3=new Web3(web3.currentProvider)

    setInterval(()=>{
      if(web3&&this.state.web3.web3Instance){
        if(web3.eth.coinbase!==this.state.web3.coinbase){
          let newCoinbase=web3.eth.coinbase
          web3.eth.getBalance(web3.eth.coinbase, function (err, newBalance) {
            if (err) {
              console.log(err)
            } 
            else {
              this.state.web3.coinbase=newCoinbase
              this.state.web3.balance=parseInt(newBalance,10)
              this.pollWeb3()
            } 
          })
        }else{
          web3.eth.getBalance(this.state.web3.coinbase, (err, polledBalance) => {
            if (err) {
              console.log(err)
            } else if (parseInt(polledBalance, 10) !== this.state.web3.balance) {
              this.state.web3.coinbase=this.state.web3.coinbase
              this.state.web3.balance=polledBalance
              this.pollWeb3()
            }
          })
        }
      }
    },10000)

  }

  getContract = new Promise(function (resolve, reject) {
    let web3 = new Web3(window['web3'].currentProvider)
    let myContract = web3.eth.contract(ABI)
    let myContractInstance = myContract.at(address)
    // casinoContractInstance = () => casinoContractInstance
    resolve(myContractInstance)
  })

  getContractInstance () {
    this.getContract.then(result => {
      this.registerContractInstance(result)
    }).catch(e => console.log(e))
  }

  registerContractInstance (payload) {
    console.log("my contract instance: ",payload)
    this.state.contractInstance = () => payload
  }


}
