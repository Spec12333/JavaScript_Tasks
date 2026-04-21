const account = {
    balance : 1000,
    currency : "Amd",
    [Symbol.toPrimitive] (hint) {
        if(hint === "number") {
            return this.balance;
        } 
        if(hint === "string") {
            return "Account Balance: " + this.balance + " " + this.currency;
        }
        return this.balance;
    }
}

console.log(+account);
console.log(String(account));
console.log(account + 500);

// Symbol.toPrimitive is a special Symbol property that controls how an object is converted
// to a primitive value.
// It receives a hint argument, which can be "number", "string", or "default".
// If the hint is "number", it returns a numeric value.
// If the hint is "string", it returns a formatted string with the account information.
// If the hint is "default", it usually behaves like "number" and returns the balance.
// So, when we use +account, it uses the "number" hint and returns the balance.
// When we use String(account), it uses the "string" hint and returns a descriptive string.
// When we use account + 500, it uses the "default" hint, returns the balance,
// and then performs the addition.