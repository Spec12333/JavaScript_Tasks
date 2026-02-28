let string = "oisdnvoisndvoi0";

function strcount(string) {
    let count = 0;
    for (let i = 0; string[i] !== undefined; ++i) {
        count++;
    }
    return count;
}

let res = strcount(string);
console.log(res);