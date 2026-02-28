let arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];
let sum = 0;

function arrsum(arr) {
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }

    return sum;
}

console.log(arrsum(arr));