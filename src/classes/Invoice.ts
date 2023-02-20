export class Invoice implements Hasformatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}
    format(): string {
      //  throw new Error("Method not implemented.");
      return `${this.client} is  owes ${this.amount} details  ${this.details}`;
    }
}