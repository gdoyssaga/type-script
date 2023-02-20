"use strict";
class Payment {
    constructor(recipients, details, amount) {
        this.recipients = recipients;
        this.details = details;
        this.amount = amount;
    }
    format() {
        //  throw new Error("Method not implemented.");
        return `${this.recipients} owes ${this.amount} details  ${this.details}`;
    }
}
