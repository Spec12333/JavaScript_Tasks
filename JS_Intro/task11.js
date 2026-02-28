let value = undefined;
function typecheck(value) {
    if (value === null) {
        return "Null";
    } else if (value === Array.isArray(value)) {
        return "Array";
    } else if (value === undefined) {
        return "undefined";
    } else if (value === "number") {
        return Number.isNaN(value) ? "NaN" : "Number";
    } else if (value === "function") {
        return "Function";
    } else if (value === "object") {
        return "Object";
    } else {
        return typeof value;
    }
}

console.log(typecheck(value));