let arr = [ 2, 4, 6, 8, 10];

function logic(currentValue, index, array) {
    return currentValue % 2 == 0;    
}

function myEvery(arr, logic) {
    for (let i = 0; i < arr.length; ++i) {
        if (!logic(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

console.log(myEvery(arr, logic));