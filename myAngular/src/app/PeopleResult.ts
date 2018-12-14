import  {People} from './People';
export class PeopleResult{
    //总人数
    count:number;
    //下一页的URL
    next:string;
    //上一页的URL
    prevoius:string;
    results:People[];
}