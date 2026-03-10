let person1 = {
    Name : "John",
    Surname : "Johnes"
};
 let person2 = {
    Name : "John",
    Surname : "Johnes"
};

function isEqual() {
    let obj1_keys = Object.keys(person1);
    let obj2_keys = Object.keys(person2);

    for (let key of obj1_keys) {
        if (person1[key] !== person2[key]) {
            return false;
        }
    }
    return true;
}
console.log(isEqual());