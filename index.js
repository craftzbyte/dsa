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

// console.log(getSecondLargest(ar));
// is palindrome
const isDummy = (number) => {
  if (number < 0 || !Number.isInteger(number)) return false;
  let rev = 0;
  let original = number;
  while (original != 0) {
    let lastdigit = original % 10;
    original = Math.floor(original / 10);
    rev = rev * 10 + lastdigit;
  }
  console.log(rev);
  return rev === number;
};
// console.log(isDummy(NaN));

const removeDuplicates = (arr) => {
  let s = 0;
  let t = 0;
  while (t < arr.length) {
    if (arr[s] !== arr[t]) {
      arr[++s] = arr[t];
    }
    t++;
  }
  return s + 1;
};

console.log(
  removeDuplicates([
    1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 5, 5, 5, 5,
    5, 6,
  ])
);
