let num = Math.floor(Math.random() * 100) + 1;

function evenodd(num) {
    if (num % 2 === 0) {
        return "The number is Even ";
    } else {
        return "The number is Odd ";
    }
}

console.log(evenodd(num) + num);