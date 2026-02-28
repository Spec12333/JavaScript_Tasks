let num = 120;

function truefalse(num) {
    if (typeof num !== "number") return false;
    if (Number.isNaN(num)) return false;
    if (!Number.isFinite(num)) return false;
    if (!Number.isInteger(num)) return false;
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) return false;

    return true;
}

console.log(truefalse(num));