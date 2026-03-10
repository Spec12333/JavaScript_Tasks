let value = {};
function plain(value) {

if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    return true;
} else {
    return false;
}

}
console.log(plain(value));