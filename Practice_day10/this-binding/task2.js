const student1 = {name : "Anna", score : 80};
const student2 = {name : "Mark", score : 95};

function printResult() {
    console.log(this.name + " scored " + this.score);
}

let std1 = printResult.call(student1);
let std2 = printResult.apply(student2);