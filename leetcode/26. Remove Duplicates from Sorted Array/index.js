/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let prevs = [nums[0]];
  let nulls = [];

  for (let i = 1; i < nums.length; i++) {
    if (prevs.some(value => value === nums[i])) {
      nums[i] = null;
      nulls.push(i);
    } else {
      prevs.push(nums[i]);

      if (nulls.length > 0) {
        nums[nulls.shift()] = nums[i];
        nums[i] = null;
        nulls.push(i);
      }
    }
  }

  return prevs.length;
};

console.log(removeDuplicates([1, 2, 3, 3, 3, 4, 1, 5]));
