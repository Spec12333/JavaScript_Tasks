let arr = [{name: "A", age: 10}, {name: "B", age: 15}];

function ageRet(arr) {
    let new_arr = arr.map(i => i.age);
    return new_arr
}
console.log(ageRet(arr));