let arr = [15, 20, 30, 40, 17, 18, 23, 24, 25];

function fillterandmap(arr) {
    let new_arr = arr.filter(i => i % 2 == 0).map(i => i * i);
    return new_arr;
}
console.log(fillterandmap(arr));