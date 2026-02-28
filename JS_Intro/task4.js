let string = "Hello Everyone!";

function rev(string) {
    let rev_str = "";
    for (let i = string.length - 1; i >= 0; --i) {
        rev_str += string[i];
    }
    return rev_str;
}

console.log(rev(string));