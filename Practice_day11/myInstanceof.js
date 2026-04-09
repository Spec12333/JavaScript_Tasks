function myInstanceOf(obj, Constructor) {
    if (typeof obj !== "object") {
        return false;
    }
    if (obj === null) {
        return true;
    }
    
    let tmp = obj.__proto__;
    while (tmp) {
        if (tmp === Constructor.prototype) {
            return true;
        }
        tmp = tmp.__proto__;
    }
    return false;
}
function Animal() {}
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog();

console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(dog, Array)); // false
console.log(myInstanceOf(null, Object)); // false
console.log(myInstanceOf(123, Number)); // false
console.log(myInstanceOf("hello", String)); // false