Function.prototype.myBind = function(comingObj, ...outargs) {
    let myThis = comingObj ?? globalThis;
    let fn = this
    return function(...args) {
        let property = Symbol();
        myThis[property] = fn;
        let res = myThis[property](...outargs, ...args);
        delete myThis[property];
        return res;
    }
}

let obj = {
    name : "John",
    surname : "Smith",
}

function foo(num1, num2) {
    console.log(this.name, num1, num2);
    
}

let new_obj = foo.myBind(obj, 45);
new_obj(55);
new_obj(55);