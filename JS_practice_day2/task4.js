let num = Math.floor(Math.random() * 1000) + 1;
num = Math.abs(num);

function numdigcount(num) {
    let digit = 0;
    let count = 0;

    while (num != 0) {
        digit = num % 10;
        count++;
        num = Math.floor(num / 10);
    }

    return count;
}

console.log(numdigcount(num), num);