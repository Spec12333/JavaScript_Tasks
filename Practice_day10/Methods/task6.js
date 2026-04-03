let words_arr = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];

function wordsFilter(words_arr) {
    let filtered_arr = words_arr.filter(i => i.length > 5);
    return filtered_arr;
}
console.log(wordsFilter(words_arr));