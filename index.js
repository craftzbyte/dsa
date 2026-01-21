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

let nums = ["a", "b", "c", "d"];
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

let a1 = [1, 3, 4, 7, 0, 0, 0, 0, 0];
let a2 = [2, 3, 5, 6, 8];

const mergeSorrted = (nums1, m, nums2, n) => {
  let p = m - 1;
  let q = n - 1;
  if (m == 0) return nums2;
  if (n == 0) return nums1;
  for (let i = m + n - 1; i >= 0; i--) {
    if (q < 0) break;
    if (nums1[p] >= nums2[q] && p > 0) {
      nums1[i] = nums1[p--];
    } else {
      nums1[i] = nums2[q--];
    }
  }
  return nums1;
};

let aa = [1, 0, 0, 0, 2, 3, 0, 5, 1, 8, 0, 4, 0, 0];
[1, 2, 3, 5, 1, 8, 4];

const movingZeros = (nums = []) => {
  let x = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[x] = nums[i];
      x++;
    }
  }
  while (x < nums.length) {
    nums[x] = 0;
    x++;
  }
  return nums;
};

const a = [1, 1, 0, 1, 1, 1];

const consecutiveOne = (nums) => {
  let maxCount = 0;
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) p++;

    if ((nums[i] == 0 || i == nums.length - 1) && p != 0) {
      if (p > maxCount) maxCount = p;
      p = 0;
    }
  }
  return maxCount;
};
consecutiveOne(a);

let missingNumber = (nums) => {
  let n = nums.length;
  let sum = n / 2(n + 1);
  let ss = 0;
  for (let i = 0; i < nums.length; i++) {
    ss = ss + nums[i];
  }
  return (sum = ss);
};

let singleNumber = (nums) => {
  let p = 0;
};

//RECURSSION-function calls itself to solve smaller versions of the same problem

//base case- write this on top
//recurrsive case
const recurrsion = () => {};

//print 1 to n

function potn(n) {
  if (n == -1) return;
  console.log("printN", n);
  potn(n - (n - 1));
}
// potn(5);
// sum of first n
let sumn = (n) => {
  if (n == 0) return n;
  return n + sumn(n - 1);
};
console.log(sumn(3));

let w = [1, 3, 6, 3, 7, 3];

let sumea = (ar = []) => {
  if (ar.length === 1) return ar[0];
  return ar[ar.length - 1] + sumea(ar.slice(0, ar.length - 1));
};
console.log(sumea(w));

//odd numbers in array
let sume = (ar = []) => {
  if (ar.length === 1) return ar[0] % 2 == 0 ? 0 : ar[0];
  let i = ar[ar.length - 1] % 2 === 0 ? 0 : ar[ar.length - 1];

  return i + sume(ar.slice(0, ar.length - 1));
};
console.log(sume(w));

//factorial

let getFactorial = (n) => {
  if (n == 1 || n == 0) return 1;
  return n * getFactorial(n - 1);
};

console.log(getFactorial(5));

//power of two

let pot = (n) => {
  if (n === 1) return true;
  if (n < 1) return false;
  return pot(n / 2);
};

console.log(pot(12));
