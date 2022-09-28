//classes
import {HasFormatter} from '../interfaces/HasFormatter'
export class invoice{
    client:string;
    detail:string;
    amount:number;

    constructor(c:string,d:string,a:number){
        this.client=c;
        this.detail=d;
        this.amount=a;
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.detail}`
    }
}