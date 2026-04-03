const p1 = { name: "Anna", points: 10 };
const p2 = { name: "Mark", points: 25 };

function callFunc() {
    console.log(this.name + " has " + this.points + " points");
    return;
}

let p1_res = callFunc.call(p1);
let p2_res = callFunc.call(p2);