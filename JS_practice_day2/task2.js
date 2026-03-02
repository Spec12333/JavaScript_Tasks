let num = Math.floor(Math.random() * 100) + 1;

function sumofnum(num) {
    let sum = 0;
    for (let i = 0; i < num; ++i) {
        sum += i;
    }

    return sum;
}

console.log(sumofnum(num), + num);