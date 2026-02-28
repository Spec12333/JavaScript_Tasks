let identifier = 100;

function primitivecheck(identifier) {
    return (identifier === null || typeof identifier === "bigint" 
    || typeof identifier === "boolean" || typeof identifier === "number" 
    || typeof identifier === "string" ||typeof identifier === "symbol" 
    || typeof identifier === "undefined");
}

console.log(primitivecheck(identifier));