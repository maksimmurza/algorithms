// Set a pointer - place where we should paste non val.
// We shift all non val elements left and do not delete val els at all, just leave them
// correct length is current pointer value

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let p = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[p++] = nums[i];
    }
  }

  return p;
};

// console.log(removeElement([4, 3, 2, 3, 1, 3, 7, 3, 3], 3)); // 4
// console.log(removeElement([1], 1)); // 0
// console.log(removeElement([4, 5], 5)); // 1
console.log(removeElement([3], 2)); // 1
