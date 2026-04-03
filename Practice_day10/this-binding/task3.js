const user = {
    name : "Alex",
    greet() {
        return "Hello " + this.name
    },
};

const admin = {
    name : "Admin",
}

let usr = user.greet.call(admin);
console.log(usr);