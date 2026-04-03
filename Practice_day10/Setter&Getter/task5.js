class Product {
    constructor(price) {
        this.setsPrice = price;
    }

    set setsPrice(price) {
        this._price = price;
    }

    get retPrice() {
        return this._price * 0.90;
    }
}

let res = new Product(12345);
console.log(res.retPrice);