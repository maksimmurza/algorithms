/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = nums => {
  if (nums.length === 0) return [];
  const intervals = [];
  let range = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (range.at(-1) === nums[i] - 1) {
      range.push(nums[i]);
    } else {
      if (range.length > 1) {
        intervals.push(`${range[0]}->${range.at(-1)}`);
      } else {
        intervals.push(`${range[0]}`);
      }
      range = [nums[i]];
    }
  }
  if (range.length > 1) {
    intervals.push(`${range[0]}->${range.at(-1)}`);
  } else {
    intervals.push(`${range[0]}`);
  }

  return intervals;
};

// const summaryRanges = nums => {
//   if (nums.length === 0) return [];
//   const intervals = [];
//   let range = [nums[0]];
//   for (let i = 1; i < nums.length; i++) {
//     if (range.at(-1) === nums[i] - 1) {
//       range.push(nums[i]);
//     } else {
//       intervals.push(
//         `${range[0]}` + (range.length > 1 ? `->${range.at(-1)}` : '')
//       );
//       range = [nums[i]];
//     }
//   }
//   intervals.push(`${range[0]}` + (range.length > 1 ? `->${range.at(-1)}` : ''));
//   return intervals;
// };

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
