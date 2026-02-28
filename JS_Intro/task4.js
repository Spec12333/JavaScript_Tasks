let string = "Hello Everyone!";
let rev_str = "";

function rev(string) {
    for (let i = string.length - 1; i >= 0; --i) {
        rev_str += string[i];
    }
    return rev_str;
}

console.log(rev(string));