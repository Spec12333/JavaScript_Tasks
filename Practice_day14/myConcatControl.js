const digits = [1, 2, 3];

const extraNumbers = {
    "0" : 4,
    "1" : 5,
    length : 2,

    [Symbol.isConcatSpreadable] : true
};

console.log(digits.concat(extraNumbers));

bonus = [4, 5];
bonus[Symbol.isConcatSpreadable] = false;
console.log(bonus);

digits.concat(bonus);
console.log(digits.concat(bonus));

// Symbol.isConcatSpreadable is a Symbol property that controls if the object can be flattened or not
// when using Array.prototype.concat().
// If it is set to true it adds array as array elements each has its index, if it is false than,
// it adds the whole object as one element. So, when we set bonus[Symbol.isConcatSpreadable] = false,
// the concat() method sees that the array should not be spread and adds it as one element instead of flattening it.