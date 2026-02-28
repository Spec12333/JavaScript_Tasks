let num1 = 100;
let num2 = "200";
let num3 = 200;
function addcheck(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }

    return "INVALID INPUT";
}

console.log(addcheck(num1, num2));
console.log(addcheck(num1, num3));