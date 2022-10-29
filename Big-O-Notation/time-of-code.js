// Time Complexity in same function
function sumOfAll (n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(sumOfAll(10));


// try to different
function sumOfAll2 (n) {
    return n * n + 1 / 2;
}
console.log(sumOfAll2(150));