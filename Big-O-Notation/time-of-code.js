// // Time Complexity in same function
// function sumOfAll (n) {
//     let total = 0;
//     for (let i = 0; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }
// console.log(sumOfAll(10));


// // try to different
// function sumOfAll2 (n) {
//     return n * n + 1 / 2;
// }
// console.log(sumOfAll2(150));


// constant and smaller Terms don't metter in big-o
function min5Log (n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
// min5Log(12);  // big-o(n)


function max5Log (n) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
max5Log(3);  // big-o(1)