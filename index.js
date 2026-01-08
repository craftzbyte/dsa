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

let arrr = [0, 1, 2, 2, 3, 0, 4, 2];

const removeElement = (nums, val) => {
  let s = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[s++] = nums[i];
    }
  }
  return [s, nums];
};

//reverse string array with o(1)} memory

let a = ["a", "b", "c", "d"];
const reverseString = (ar) => {
  if (ar.length <= 1) return ar;
  let s = 0;
  let e = ar.length - 1;
  let space;
  while (e > s) {
    space = ar[s];
    ar[s] = ar[e];
    ar[e] = space;
    s++;
    e--;
  }
  return ar;
};

const maxProfit = (arr = []) => {
  let min = arr[0] || 0;
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min;
    }
  }
  return maxProfit;
};
