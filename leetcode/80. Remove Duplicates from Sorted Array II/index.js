/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length && nums[i] !== null; i++) {
    if (nums[i - 1] && nums[i] === nums[i - 1]) {
      continue;
    }
    let isFirst = true;
    for (let j = i + 1; j < nums.length && nums[j] !== null; j++) {
      if (nums[i] === nums[j] && nums[i] !== null) {
        if (isFirst) {
          isFirst = false;
          continue;
        }
        let k = j;
        nums[j] = null;
        j--;
        while (k < nums.length - 1 && nums[k + 1] !== null) {
          const temp = nums[k + 1];
          nums[k + 1] = null;
          nums[k] = temp;
          k++;
        }
      }
    }
  }
  // console.log(nums);
  return nums.filter(v => v !== null).length;
};

// console.log(removeDuplicates([1, 2, 3, 3, 3, 4, 5, 5]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
// console.log(removeDuplicates([1]));
