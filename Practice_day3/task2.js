let arr = [1, 67, 3];

function add(currentValue, i, arr) {
    return currentValue * 2;
}

function myMap(arr, add) {
    let new_arr = [];
    for (let i = 0; i < arr.length; ++i) {
        new_arr.push(add(arr[i], i, arr));
    }
    return new_arr;
}

console.log(myMap(arr, add));