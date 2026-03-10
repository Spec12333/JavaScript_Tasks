let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function logic(currentValue, index, array) {
    return currentValue * 2;
}

function myForEach(arr, logic) {
    for (let i = 0; i < arr.length; ++i) {
        arr[i] = logic(arr[i] , i, arr);
    }
    return arr;
}

console.log(myForEach(arr, logic));