function total(a, b, c) {
    return a + b + c;
}

const args = [7, 8, 9];

let call_res = total.call(args, 7, 8, 9);
let apply_res = total.apply(args, args)
console.log(call_res, apply_res);