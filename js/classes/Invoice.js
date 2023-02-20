"use strict";
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        //  throw new Error("Method not implemented.");
        return `${this.client} owes ${this.amount} details  ${this.details}`;
    }
}
