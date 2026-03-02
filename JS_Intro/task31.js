let arr = [1, 2, 3];

function fisrtlastelm(arr) {
    if (arr.length === 0) {
        return arr;
    } 
    return [arr[0], arr[arr.length - 1]];
}

console.log(fisrtlastelm(arr));