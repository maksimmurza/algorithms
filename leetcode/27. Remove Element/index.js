/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    if (nums[start] === val) {
      while (nums[end] === val || nums[end] === null) {
        if (nums[end] === val) {
          nums[end] = null;
        }
        end--;
      }

      nums[start] = nums[end];
      nums[end] = null;
      end--;
    }
    start++;
  }

  return nums.reduce((acc, v, i) => (v ? i + 1 : acc), 0);
};

console.log(removeElement([4, 3, 2, 3, 1, 3, 7, 3, 3], 3)); // 4
console.log(removeElement([1], 1)); // 0
console.log(removeElement([4, 5], 5)); // 1
