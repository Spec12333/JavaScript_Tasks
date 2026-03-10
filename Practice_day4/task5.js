let object = {
    num1 : 1,
    num2 : 2,
    num3 : 3,
    num4 : 4,
    num5 : 5,
    num6 : 7,
}

for (let i of Object.keys(object)) {
    console.log(object[i]);
}