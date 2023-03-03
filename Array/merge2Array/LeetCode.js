// problem statement
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example

// Example 1.
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2.
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

// solution Example 1.
// Given:
// nums1 = [1,2,3,0,0,0],
// m = 3,
// nums2 = [2,5,6],
// n = 3
// nums3: [1,2,2,3,5,6]

function mergeExample1(nums1, nums2, m, n, nums3) {
  var a = 0;
  var b = 0;
  var c = 0;

  //   tranverse nums1 array
  while (a < m) {
    nums3[c++] = nums1[a++];
  }

  //    transverse nums2 array
  while (b < n) {
    nums3[c++] = nums2[b++];
  }

  nums3.sort();
}

var nums1 = [1, 2, 3, 0, 0, 0];
// where m = nums1.length
var m = nums1.length;
var nums2 = [2, 5, 6];
// where n = nums2.length
var n = nums2.length;
var nums3 = new Array(m + n);
mergeExample1(nums1, nums2, n, m, nums3);

console.log("solution to Example 1");
console.log("==========================");
for (i = 0; i < m + n; i++) {
  console.log(nums3[i] + " ");
}
console.log("==========================");

// solution Example 2.
// Given:
// nums1 = [1],
// m = 1,
// nums2 = [],
// n = 0
// nums3: [1]

function mergeExample2(nums1, m, nums2, n, nums3) {
  var i = 0,
    j = 0,
    k = 0;

  while (i < m) {
    nums3[k++] = nums1[i++];
  }

  while (j < n) {
    nums3[k++] = nums2[j++];
  }

  nums3.sort();
}

var nums1 = [1];
var m = nums1.length;

var nums2 = [];
var n = nums2.length;

var nums3 = new Array(m + n);
mergeExample2(nums1, m, nums2, n, nums3);

console.log("solution to Example 2");
console.log("==========================");

for (i = 0; i < n + m; i++) {
  console.log(nums3[i] + " ");
}
console.log("==========================");

// solution Example 3.
// Given:
// nums1 = [],
// m = 0,
// nums2 = [1],
// n = 1
// nums3: [1]

function mergeExample3(nums1, m, nums2, n, nums3) {
  var x = 0,
    y = 0,
    z = 0;

  while (x < m) {
    nums3[z++] = nums1[x++];
  }

  while (y < n) {
    nums3[z++] = nums2[y++];
  }

  nums3.sort();
}

var nums1 = [];
var m = nums1.length;

var nums2 = [1];
var n = nums2.length;

var nums3 = new Array(m + n);
mergeExample2(nums1, m, nums2, n, nums3);

console.log("solution to Example 3");
console.log("==========================");

for (i = 0; i < n + m; i++) {
  console.log(nums3[i] + " ");
}
console.log("==========================");
