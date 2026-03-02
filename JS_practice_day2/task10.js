let arr = [1, 2, 3, 4, 5, 6];
let target = 7;

function arrcontains(arr, target) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
console.log(arrcontains(arr, target));