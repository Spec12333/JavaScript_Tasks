class Counter {
    constructor() {
        this._count = 0;
    }

    increment() {
        this._count++;
    }
    
    get countRes() {
        return this._count;
    }
}

let res = new Counter();
res.increment();
res.increment();
res.increment();
res.increment();
console.log(res.countRes);