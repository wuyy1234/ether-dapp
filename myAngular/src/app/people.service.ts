import { Injectable } from '@angular/core';
import {PEOPLES} from './mock-people';
import  {People} from './People';
import {PeopleResult} from './PeopleResult';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class PeopleService {
  peoples:People[]=[];
  auth:string
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',//以json方式提交
      'Authorization': this.auth
    })
  };

  url='https://swapi.co/api/people/';

  private log(message :string){
    //this.messageService.add(message);
    console.log(message)
  }

  getPeoples():Observable<People[]>{
    this.url='https://swapi.co/api/people/';//恢复初始化
    this.peoples=[];
    this.log("start to get peoples");

    /*用于获取连页数据*/
  this.getPeoplesResultFromHTTP(this.url).then(
    result=>this.log("finish by url:"+result));
    return of(this.peoples);
  }

  /*将从HTTP获取单页信息函数转为promise*/
  getOnePeoplePagePromise(urlThis:string): Promise<{}>{
    //this.log("start promise");
    return new Promise((resolve,reject)=>{//绑定this,不用function(resolve,reject)
      //this.log("start new promise");
      //异步耗时操作
      this.getOnePageRes(urlThis).subscribe(peopleResult=>{
        

        this.log("getOnePeoplePagePromise");
        this.url=peopleResult.next;
        peopleResult.results.forEach(people=>{
          this.peoples.push(people);
        })
        resolve(this.url);
      });
    });
  }
  
  /*此函数用于从HTTP获取单页信息*/
  getOnePageRes(url:string):Observable<PeopleResult>{
    /*暂不添加this.httpOptions*/
    return this.http.get<PeopleResult>(url).pipe(
      tap(peopleResult => this.log("getOnePageRes from "+url)),
      catchError(this.handleError<PeopleResult>("getOnePageRes"))//不要忘了<PeopleResult>
    );
  }

  /*用于链式调用getOnePeoplePagePromise,采用递归的方式*/
  getPeoplesResultFromHTTP(url:string):Promise<{}>{
    this.log("getPeoplesResultFromHTTP from "+url)
    if(url!==null){
      return this.getOnePeoplePagePromise(url).then(
        _ =>{
          return this.getPeoplesResultFromHTTP(this.url);
        }
      )
    }else{
      return Promise.resolve(this.url);
    }
  }

  getPeople(name:string):Observable<People>{
    var url;
    for(let  p of this.peoples){
      if(p.name===name){
        url=p.url;
      }
    }
    /*暂不添加this.httpOptions*/
    return this.http.get<People>(url).pipe(
      tap(_=>this.log("get detail of "+name)),
      catchError(this.handleError<People>("getPeople"))
    );
  }
  
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead
    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);
    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
  

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
}
