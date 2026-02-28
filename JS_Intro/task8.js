let string = "Hello Everyone my name is Johnny";
let substring = "Johnny";
function substrfind(string, substring) {
    if (string.includes(substring)) {
        return "You have that substring in your string";
    } else {
        return "You dont have that substring in your string";
    }
}

console.log(substrfind(string , substring));