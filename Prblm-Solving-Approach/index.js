/*******  Take the largest and smallest numbers from an array and return their subtraction and correct any problems in the array  ********/

let temperature = [2, 3, -5, -78, 4, "hello", -1, 7, 2, -6, 9];

function getHighestLowest(arr) {
  // create a highest variable
  let max = arr[0];
  // create a lowest variable
  let min = arr[0];
  // iterate the whole array
  for (let i = 0; i < arr.length; i++) {
    // let check is there has any problems
    if (typeof arr[i] !== "number") continue;
    // if highest variable has lowest number then our current number then value will be our current element
    if (arr[i] > max) {
      max = arr[i];
    }
    // if lowest variable has highest number then our current number then value will be our current element
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  // return our highest and lowest number
  return max - min;
}
const result = getHighestLowest(temperature);
console.log(result);
