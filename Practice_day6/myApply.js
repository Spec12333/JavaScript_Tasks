Function.prototype.myApply = function(comingObj, args) {
    let myThis = comingObj ?? globalThis;
    let propertyy = Symbol();
    myThis[propertyy] = this;
    let res = myThis[propertyy](...args);
    delete myThis[propertyy];
    return res;
}

let obj = {
    name : "John",
    surname : "Smith"
}

function foo () {
    console.log(this.name);
}

foo.apply(obj);
console.log(obj);

