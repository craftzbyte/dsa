// 2nd largest
let ar = [11111111111, 3, 5, 67, 89, 0, 3, 4324, 23, 11111111111];

const getSecondLargest = (a) => {
  //find the largest by iterating the whole array
  //same methd ust skip case when it is equal;
  let largest = -Infinity;
  let scLar = -Infinity;
  ar.forEach((i) => {
    if (i > largest) {
      scLar = largest;
      largest = i;
    } else if (i > scLar && i != largest) {
      scLar = i;
    }
  });

  return scLar;
};

console.log(getSecondLargest(ar));
