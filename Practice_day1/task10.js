let num = Math.floor((Math.random() * 100));

function evenodd(num) {
    if (num % 2 == 0) { 
        return "The number is Even " + num;
    } else {
        return "The number is odd " + num;
    }
}

console.log(evenodd(num));