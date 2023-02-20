import { Invoice } from './classes/Invoice.js';
import {Payment} from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const ul = document.querySelector('ul')!; 
const list = new ListTemplate(ul);

const type = document.querySelector('#type') as HTMLInputElement;
//type.value
const tofrom  = document.querySelector('#tofrom') as HTMLInputElement;
const details  = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const form = document.querySelector('form')!;
form.addEventListener('submit', (e:Event) => {
    e.preventDefault();
    let item: Hasformatter;
    //console.log("Haha");
    if(type.value == 'Invoice'){
       item =  new Invoice(tofrom.value,details.value,amount.valueAsNumber);
    }else {
       item = new Payment(tofrom.value,details.value,amount.valueAsNumber); 
    }
    list.render(item, type.value);
});