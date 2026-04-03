let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function evenFilter(arr) {
    let new_arr = arr.filter(i => i % 2 == 0);
    return new_arr;
}
console.log(evenFilter(arr));