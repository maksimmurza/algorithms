/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const steps = Math.abs(nums.length - k);
  const magic = nums.length >= k ? steps : nums.length - steps;
  const temp = nums.slice(magic).concat(nums.slice(0, magic));
  for (let i = 0; i < nums.length; i++) {
    nums[i] = temp[i];
  }

  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate([1, 2, 3], 4));
console.log(rotate([1, 2, 3, 4, 5], 9));
console.log(rotate([1, 2, 3], 4));
console.log(rotate([1, 2, 3], 4));
console.log(rotate([1, 2], 3));
