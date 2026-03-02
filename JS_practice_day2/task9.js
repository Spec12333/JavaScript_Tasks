let num = Math.floor(Math.random() * 20) + 1;
let exp = Math.floor(Math.random() * 3) + 1;

function numpower(num, exp) {
    let power = 1;
    for (let i = 0; i < exp; ++i) {
        power *= num;
    }

    return power;
}

console.log(numpower(num, exp), "The number: " +num, "The power: " +exp);