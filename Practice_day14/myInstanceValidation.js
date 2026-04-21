class OddValidator {
    static [Symbol.hasInstance] (instance) {
        if (typeof instance !== "number") {
            return  false;
        }
        return instance % 2 === 1;
    }
}

console.log(5 instanceof OddValidator);
console.log(10 instanceof OddValidator);
console.log("7" instanceof OddValidator);
console.log(7 instanceof OddValidator);