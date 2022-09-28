export class Payments {
    constructor(r, d, a) {
        this.recipient = r;
        this.detail = d;
        this.amount = a;
    }
    format() {
        return `${this.recipient} is owed ${this.amount} for ${this.detail}`;
    }
}
