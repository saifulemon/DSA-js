// Corresponding Value
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    let currentIndex = arr2.indexOf(arr1[i] ** 2);
    if (currentIndex === -1) {
      return false;
    }
    arr2.splice(currentIndex, 1);
  }
  return true;
}
console.log(same([5, 8, 9], [64, 25, 81]));



// tyr to different as big O notation
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let sequenceCounter1 = {};
  let sequenceCounter2 = {};

  for (let val of arr1) {
    sequenceCounter1[val] = sequenceCounter1[val]++ || 1;
  }
  for (let val of arr2) {
    sequenceCounter2[val] = sequenceCounter2[val]++ || 1;
  }

  for (let key in sequenceCounter1) {
    if (!(key **2) in sequenceCounter2) {
      return false;
    }

    if(sequenceCounter2[key ** 2] !== sequenceCounter1[key]){
      return false;
    }
  }
  return true;
}
console.log(same([5, 8, 9], [64, 25, 81]));