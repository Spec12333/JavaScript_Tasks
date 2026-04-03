function show() {
 return this.name;
}

const a = { name: "A" };
const b = { name: "B" };
const fn = show.bind(a);

console.log(fn.call(b)); // prints A because binds bind fn this to a this and as we know after bind it cannot be rebind again