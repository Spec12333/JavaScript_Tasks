let users = [
 {name: "Anna", age: 17},
 {name: "John", age: 20}
]

function adultFilter(users) {
    let filtered_users = users.filter(i => i.age >= 18);
    return filtered_users;
}
console.log(adultFilter(users));