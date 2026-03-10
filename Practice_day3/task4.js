let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function logic(currentValue, index, array) {
    if (currentValue > 1) {
        return true;
    }
    return false;
}

function mySome(arr, logic) {
    for (let i = 0; i < arr.length; ++i) {
        if (logic(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

console.log(mySome(arr, logic));