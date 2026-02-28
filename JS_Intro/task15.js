let num = "chlp";

function convert(num) {
    if (Number.isNaN(Number(num))) {
        return null;
    }
    return num;
}

console.log(convert(num));