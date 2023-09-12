/**
 * Каждый проход справа налево мы определяем самое дальнее число, охватывающее текущую клетку
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let jumps = 0;
  let currentIndex = nums.length - 1;

  // return farthest index
  const findFarthest = destination => {
    let farthest;

    for (let i = destination - 1; i >= 0; i--) {
      if (nums[i] >= destination - i) {
        farthest = i;
      }
    }

    return farthest;
  };

  while (currentIndex !== 0) {
    currentIndex = findFarthest(currentIndex);
    jumps++;
  }

  return jumps;
};

console.log(jump([2, 3, 1, 1, 4]));
