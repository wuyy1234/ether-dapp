import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {PeopleDetailComponent} from './people-detail/people-detail.component';
import { LoginComponent } from './login/login.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'people',component:PeopleComponent},
  {path:'detail/:name',component:PeopleDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
