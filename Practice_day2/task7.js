let str = "hello";
let char = "ll"

function charfind(str) {
    let count = 0;
    for (let i = 0; i <= str.length - char.length; ++i) {
        let match = true;
        for (let j = 0; j < char.length; ++j){
            if (str[i + j] !== char[j]){
                match = false;
                break;
            }
        }
        if (match) {
            count++;
        }
    }
    return count;
}

console.log(charfind(str));