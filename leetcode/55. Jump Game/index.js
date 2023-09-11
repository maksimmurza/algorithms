/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let currentIndex = nums.length - 1;

  const canMove = (from, to) => {
    const path = to - from;
    return nums[from] >= path;
  };

  for (let i = currentIndex - 1; i >= 0; i--) {
    if (canMove(i, currentIndex)) {
      currentIndex = i;
    }
  }

  return currentIndex === 0;
};

// console.log(canJump([2, 3, 1, 1, 4]));
console.log(canJump([3, 2, 1, 0, 4]));
