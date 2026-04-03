class Account {
    constructor(password) {
        this.pass = password;
    }

    set pass(newPassword) {
        if (newPassword.length < 6) {
            console.log("Password is too short");
            return;
        }
        this._password = newPassword;
    }
    get pass() {
        return this._password;
    }
}

let acc = new Account("1236789");
console.log(acc);