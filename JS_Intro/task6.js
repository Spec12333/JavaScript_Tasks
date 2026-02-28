let arr = [3, 6, 9, 12];

function indexfind(arr) {   
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] == 9) {
            return console.log(i);
        }
    }
}

indexfind(arr);