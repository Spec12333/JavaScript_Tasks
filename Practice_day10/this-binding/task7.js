function show() {
return this.name;
}
const obj = { name: "Test" };
const bound = show.bind(obj);
// ❗ What will this return? -> test because bind binds one time and that obj can not rebind again
console.log(bound.call({ name: "Wrong" }));