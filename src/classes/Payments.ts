//classes
import {HasFormatter} from '../interfaces/HasFormatter'
export class Payments implements HasFormatter{
    recipient:string;
    detail:string;
    amount:number;

    constructor(r:string,d:string,a:number){
        this.recipient=r;
        this.detail=d;
        this.amount=a;
    }

    format(){
        return `${this.recipient} is owed ${this.amount} for ${this.detail}`
    }
}