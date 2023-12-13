/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 *
 * Чтобы рассчитать сумму для текущего окна, нужно вычесть левый крайний и
 * прибавить правый крайний
 */
const minSubArrayLen = (target, nums) => {
  for (let width = 1; width <= nums.length; width++) {
    // first window
    let window = nums.slice(0, width).reduce((acc, v) => acc + v, 0);

    if (window >= target) {
      return width;
    }

    for (let i = 1; i + width <= nums.length - 1; i++) {
      window += nums[i + width] - nums[i];
      if (window >= target) {
        return width;
      }
    }
  }

  return 0;
};

console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]));
