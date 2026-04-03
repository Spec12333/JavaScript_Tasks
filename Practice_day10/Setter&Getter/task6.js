class BankAccount {
    constructor(balance) {
        this._balance = balance;
    }

    set add(money) {
        if (money < 0) {
            console.log("Money can not be negative");
            return
        }
        this._balance += money;
    }

    get retBal() {
        return this._balance;
    }
}

let res = new BankAccount(100);
res.add = 150;
console.log(res.retBal);