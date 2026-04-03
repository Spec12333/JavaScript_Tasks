let arr = [1, 2, 3];

function double(arr) {
    let new_arr = arr.map(i => i * 2);
    return new_arr;
}
console.log(double(arr));