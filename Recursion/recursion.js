// Recursion in javascript
// f(n-1) + n = f(n)

function sum(num) {
    if (num === 0){
        return 0;
    }
    else {
        return sum(num - 1) + num;
    }
}
console.log(sum(10));



// Recursion with Big O Notation
function sumArr(arr) {
    if (arr.length === 0) return 0;
    let rest = arr.slice(1);
    return arr[0] +  sumArr(rest);
}
console.log(sumArr([1,2,3,4,5,6]));  // time = big O (n^2)  &  space = big O(n)


