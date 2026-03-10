let person1 = {
    Boy_Name : "John",
    Boy_Surname : "Johnes"
};
let person2 = {
    Girl_name : "Claire",
    Girl_surname : "Redfield"
};
let mergedPerson = {};

Object.assign(mergedPerson, person1, person2);
console.log(mergedPerson);