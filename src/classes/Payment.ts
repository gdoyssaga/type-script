export class Payment implements Hasformatter {
    constructor(
        readonly recipients: string,
        private details: string,
        public amount: number
    ){}
    format(): string {
      //  throw new Error("Method not implemented.");
      return `${this.recipients} is  owes ${this.amount} details  ${this.details}`;
    }
}