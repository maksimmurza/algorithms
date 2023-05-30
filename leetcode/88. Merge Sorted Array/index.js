// Key: this task need implementation of the last step of merge sorting, but from the end,
// because we have restriction on using memory.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // p - pointer
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    nums1[p--] = nums1[p1] > nums2[p2] ? nums1[p1--] : nums2[p2--];
  }

  while (p2 >= 0) {
    nums1[p2] = nums2[p2--];
  }

  // return nums1;
};

console.log(merge([4, 5, 6, 9, 0, 0], 4, [1, 3], 2));
// console.log(merge([0], 0, [1], 1));
