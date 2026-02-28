let value = "string";
function typecheck(value) {
    if (value === null) {
        return "Null";
    } else if (Array.isArray(value)) {
        return "Array";
    } else if (typeof value === undefined) {
        return "undefined";
    } else if (typeof value === "number") {
        return Number.isNaN(value) ? "NaN" : "Number";
    } else if (typeof value === "function") {
        return "Function";
    } else if (typeof value === "object") {
        return "Object";
    } else {
        return typeof value;
    }
}

console.log(typecheck(value));