let users = [{ name: "Alice", age: 17}, 
    { name: "Bob", age: 20}, 
    { name: "Charlie", age: 18}, 
    {name: "Dave", age: 10}, 
    {name: "Evan", age: 15}];

function userFilter(users) {
    let filtered_users = users.filter(i => i.age >= 18).map(i => i.name);
    return filtered_users;
}
console.log(userFilter(users));