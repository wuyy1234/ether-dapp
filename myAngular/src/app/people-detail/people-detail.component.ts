import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {People} from '../People';
import {PeopleService} from '../people.service';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})

export class PeopleDetailComponent implements OnInit {
  people:People;
  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getHero();
  }
  getHero():void{
    const name=this.route.snapshot.paramMap.get('name');
    this.peopleService.getPeople(name).subscribe(people=>this.people=people);
  }

}
