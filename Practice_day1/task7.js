let arr = [50, 75, 100, 150, 200, 300];

function arrsum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];     
    }
    
    return sum;
}

let res = arrsum(arr);
console.log(res);