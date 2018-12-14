import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../people.service';
import  {People} from '../People';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peoples:People[];
  //seletedPeople:People;
  constructor(private peopleService:PeopleService) { }

  ngOnInit() {
    this.getPeoples();
  }
  getPeoples():void{
    this.peopleService.getPeoples().subscribe(peoples=>this.peoples=peoples);//异步
  }
  /*onSelect(people:People){
      this.seletedPeople=people;
      //alert(people.name);
  }*/

}
