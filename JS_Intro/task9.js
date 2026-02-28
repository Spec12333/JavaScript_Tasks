let arr = [100, 200, 300, 400, 500, 600, 700, 800, 900];

function arrsum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
    }

    return sum;
}

console.log(arrsum(arr));