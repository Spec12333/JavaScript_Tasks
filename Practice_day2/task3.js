let arr = [3, 1, 5];
function minarrelm(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; ++i) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
    //return Math.min(...arr);
}

console.log(minarrelm(arr));