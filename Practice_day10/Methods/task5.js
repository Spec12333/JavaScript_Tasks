let users_age = [15, 20, 30, 40, 17, 18, 23, 24, 25];

function ageFilter(users_age) {
    let filtered_age = users_age.filter(i => i >= 18);
    return filtered_age;
}
console.log(ageFilter(users_age));