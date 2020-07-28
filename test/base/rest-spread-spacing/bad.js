[... arr, 4, 5, 6];
let [a, b, ... arr] = [1, 2, 3, 4, 5];
function fn(... args) {
    console.log(args);
}
let { x, y, ... z } = { x: 1, y: 2, a: 3, b: 4 };
let n = { x, y, ... z };
