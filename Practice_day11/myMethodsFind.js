function getPrototypeMethods(obj) {
    let proto = obj.__proto__;
    if (proto == null) {
        return [];
    }

    let methods = [];
    let propnames = Object.getOwnPropertyNames(proto);

    for (let name of propnames) {
        if (typeof proto[name] === "function" && Object.prototype !== proto && name !== "constructor") {
            methods.push(name);
        }
    }
    return methods;
}

function User(name) {
 this.name = name;
}

User.prototype.sayHi = function () {
 return `Hi, ${this.name}`;
};

User.prototype.getName = function () {
 return this.name;
};

const user = new User("Alex");

console.log(getPrototypeMethods(user)); // ["sayHi", "getName"] order may vary
console.log(getPrototypeMethods({ a: 1 })); // []
console.log(getPrototypeMethods([]).includes("push")); // true

const base = {
 x: 10,
 print() {
   return "hello";
 }
};

const obj = Object.create(base);

console.log(getPrototypeMethods(obj)); // ["print"]
console.log(getPrototypeMethods(Object.create(null))); // []