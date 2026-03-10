let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function condition(currentValue, index, arr) {
    return currentValue % 2 == 0;
}

function myFilter(arr, condition) {
    let new_arr = [];
    for (let i = 0; i < arr.length; ++i) {
        if ((condition(arr[i], i, arr))) {
            new_arr.push(arr[i])
        }
    }
    return new_arr;
}

console.log(myFilter(arr, condition));