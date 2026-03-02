let str = "hello";
let char = "ll"

function charfind(str) {
    let count = 0;
    for (let i = 0; i < str.length; ++i) {
        if (str[i] == char){
            count++;
        }
    }
    return count;
}

console.log(charfind(str));