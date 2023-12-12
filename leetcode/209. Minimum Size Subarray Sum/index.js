/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 *
 * Постепенно расширяем ширину массива, которым мы проходим исходный
 */
const minSubArrayLen = (target, nums) => {
  const sum = arr => {
    return arr.reduce((acc, value) => acc + value, 0);
  };

  for (let j = 0; j <= nums.length; j++) {
    for (let i = 0; i + j <= nums.length; i++) {
      if (sum(nums.slice(i, i + j + 1)) >= target) {
        return j + 1;
      }
    }
  }
  return 0;
};

console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
