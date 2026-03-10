let arr = ["Claire", "Jessica", "John", "Maria", "James", "Bob"];

let object = {};

for (let i = 0; i < arr.length; ++i) {
        object[arr[i]] = i + 1;
}
console.log(object);