let arr = ["ann" , "john"];

function toUpper(arr) {
    let new_arr = arr.map(i => i.toUpperCase());
    return new_arr;
}
console.log(toUpper(arr));