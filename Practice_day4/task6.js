let object = {
    num1 : 1,
    num2 : 2,
    num3 : 3,
    num4 : 4,
    num5 : 5,
    num6 : 7,
}

let arr = Object.entries(object);
let filter = arr.filter((prop_name, value) => value < 4);
let fixed_object = Object.fromEntries(filter);
console.log(fixed_object);