class Email {
    constructor(email) {
        this._email = email;
    }
    
    set atsigncheck(value) {
        if (value.includes("@")) {
            this._email = value;
        } else {
            console.log("Invalid email");
            return;
        }
    }

    get retVal() {
        return this._email;
    }
}

let email = new Email();
email.atsigncheck = "test@gmail.com"
console.log(email);