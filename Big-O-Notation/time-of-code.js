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


// constant and smaller Terms don't metter in big-o
function min5Log (n) {
    for (let i = 0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
min5Log(12);  // big-o(n)


function max5Log (n) {
    for (let i = 0; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
max5Log(3);  // big-o(1) 



// space complexity in same function
function sum (arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
console.log(sum([5, 15, 3, 7])); 


// try to different
function double (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
console.log(double([5, 15, 3, 7]));  



// find a unique name
function uniqueName (arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (!unique.includes(ele)) {
            unique.push(ele);
        }
    }
    return unique;
}
// time complexity == n2;
// space complexity == n;

let nameArr = ['saifulemon', 'abu Hasnat', 'noman', 'saifulemon', 'abuHasnat', 'mehedi'];
console.log(uniqueName(nameArr)); 



// log n in javascript
function logarithms (n) {
    while (n > 1) {
        console.log(n);
        n /= 2;
    }
    console.log('done');
}    
logarithms(10);


// another log n 
function anotherLogn (n) {
    if (n <= 1) {
        console.log('done');
        return
    }
    console.log(n);
    anotherLogn(n/2);
}
anotherLogn(8); 


// object in Big-O
const myObj = {
    name: 'Saiful Islam',
    roll: '4804079',
    dep: 'DTNT',
    sem: '6th'
}
console.log(Object.keys(myObj));


// Array in Big-O
const myArr = ['saiful', 'abuHasnat', 'mahir', 'niloy'];
//                0           1          2         3
/* 
---------Big-O of array ------------
1. Insertion = depends < shift & unshift = Big-O (n)  
   Insertion = depends < push & pop = Big-O (1) 

2. Removal = depends 
3. Searching = Big-O (n)
4. Access = Big-O (1)
*/