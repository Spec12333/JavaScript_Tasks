let num = 56;

function convert(num) {
    let new_num = Number(num);
    if (Number.isNaN(new_num)) {
        return null;
    }
    return new_num;
}

console.log(convert(num));