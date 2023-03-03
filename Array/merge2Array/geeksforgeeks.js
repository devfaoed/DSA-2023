// Problem
// Given two sorted arrays, the task is to merge them in a sorted manner.
// Examples:
// Problem 1
// Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8}
// Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}

// Solution 1
// analyzing the problem
// arr1[] = { 1, 3, 4, 5}
// arr2[] = {2, 4, 6, 8}

// merge the two together in sorted order to get
// arr3[] = {1, 2, 3, 4, 4, 5, 6, 8}

function mergeArry(arr1, arr2, n1, n2, arr3) {
  // where n1 = lenngth of arr1
  // where n2 = length of arr2
  (i = 0), (j = 0), (k = 0);

  //   tranversing arr1
  while (i < n1) {
    arr3[k++] = arr1[i++];
  }

  //    tranversing arr2
  while (j < n2) {
    arr3[k++] = arr2[j++];
  }

  // sort arr3
  arr3.sort();
}

var arr1 = [1, 3, 4, 5];
var n1 = arr1.length;
var arr2 = [2, 4, 6, 8];
var n2 = arr2.length;
var arr3 = new Array(n1 + n2);

mergeArry(arr1, arr2, n1, n2, arr3);

console.log("solution to problem 1 is as above");
console.log("==========================");

for (i = 0; i < n1 + n2; i++) {
  console.log(arr3[i] + " ");
}
console.log("==========================");

// Problem 2
// Input: arr1[] = { 5, 8, 9}, arr2[] = {4, 7, 8}
// Output: arr3[] = {4, 5, 7, 8, 8, 9}

// solution
// arr1 = [5, 8, 9]
// arr2 = [4, 7, 8]

// merge the two above array to get
// arr3[] = {4, 5, 7, 8, 8, 9}

// soln

function sortArray(arr1, arr2, l1, l2, arr3) {
  // where l1 = the length of arr1
  // where l2 = the length of arr2

  a = 0;
  b = 0;
  c = 0;
  while (a < l1) {
    arr3[c++] = arr1[a++];
  }

  while (b < l2) {
    arr3[k++] = arr2[b++];
  }

  arr3.sort();
}

var arr1 = [5, 8, 9];
l1 = arr1.length;
var arr2 = [4, 7, 8];
l2 = arr2.length;
arr3 = new Array(n1 + n2);
sortArray(arr1, arr2, l1, l2, arr3);

console.log("solution to problem 2 is as above");
console.log("==========================");

for (i = 0; i < n1 + n2; i++) {
  console.log(arr3[i] + " ");
}

console.log("==========================");
