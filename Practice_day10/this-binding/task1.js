function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}   

let arr = [10, 20, 30];
let res = sum.apply(null, arr);
console.log(res);