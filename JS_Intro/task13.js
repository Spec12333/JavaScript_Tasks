let num = 2;
let string = "2";
let obj = {};

function cmp(num, string) {
        obj.loose = num == string;
        obj.strict = num === string;
        return obj;
}

console.log(cmp(num, string));