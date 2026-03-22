Function.prototype.myCall = function(newObj, ...args) {
    let newThis = newObj ?? globalThis;
    let val = Symbol();
    newThis[val] = this;
    let res = newThis[val](...args);
    delete newThis[val];
    return res;
}

let obj = {
    name : "John",
    surname : "Smith",
};
function foo() {
    console.log(this.name);    
}

foo.myCall(obj);
console.log(obj);

