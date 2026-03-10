let student = {
    Name : "Chris",
    Surname : "Redfield"
};

Object.freeze(student);

student.Name = "James";

console.log(student);