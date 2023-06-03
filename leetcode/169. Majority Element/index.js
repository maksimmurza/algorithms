/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const endPosition = Math.floor(nums.length / 2);
  return nums.sort().find((n, i) => nums[i + endPosition] === n);
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
