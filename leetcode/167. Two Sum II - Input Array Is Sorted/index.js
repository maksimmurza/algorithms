/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) => {
  for (let i = 0; i <= numbers.length - 1; i++) {
    const div = target - numbers[i];
    for (let j = i + 1; j <= numbers.length - 1; j++) {
      if (div === numbers[j]) {
        return [i + 1, j + 1];
      }
    }
  }
};

console.log(twoSum([0, 0, 3, 4], 4));
