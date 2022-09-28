export class invoice {
    constructor(c, d, a) {
        this.client = c;
        this.detail = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.detail}`;
    }
}
