import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
const type = document.querySelector('#type');
//type.value
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let item;
    //console.log("Haha");
    if (type.value == 'Invoice') {
        item = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        item = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(item, type.value);
});
