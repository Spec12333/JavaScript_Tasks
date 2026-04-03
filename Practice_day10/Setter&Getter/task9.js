class Cart {
    constructor() {
        this._total = 0;
    }

    set itemprice(value) {
        if (value < 0) {
            console.log("The price can not be negative");
            return;
        }
        this._total += value;
    }

    get retVal() {
        return this._total;
    }
}

let cart = new Cart();
cart.itemprice = 200;
console.log(cart.retVal);