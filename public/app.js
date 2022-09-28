import { Payments } from './classes/Payments.js';
import { invoice } from './classes/invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
// let p1:HasFormatter;
// let p2:HasFormatter;
// p1=new invoice('febin','netflix',200);
// p2=new invoice('febin12','youtube',400);
// console.log(p1);
// console.log(p2);
// const invOne=new invoice('febin','work on this',22);
// const invTwo=new invoice('febinsds','work on thisss',222);
// let invoices:invoice[]=[];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(ele => {
//     console.log(ele)
// });
//form
const form = document.querySelector('.new-item-form');
//input
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payments(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
    console.log(doc);
});
//tuples
let arr = [1, 'febin', 2];
