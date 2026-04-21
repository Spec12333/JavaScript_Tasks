const myRange = {
    from : 1,
    to  : 10,

    [Symbol.iterator]() {
        let current = this.from;
        let end = this.to;

        return {
            next() {
                if (current <= end) {
                    return {value: current++, done : false};
                } else {
                    return {done : true};
                }
            }
        }
    }
}

for(let i of myRange) {
    console.log(i);
}