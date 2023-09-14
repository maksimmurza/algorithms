/**
 * Обход двумерного массива
 *
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
  const matrix = strs.map(str => str.split(''));
  let result = '';

  for (let i = 0; i <= matrix[0].length - 1 && i >= 0; i++) {
    for (let j = 0; j <= matrix.length - 1; j++) {
      if (matrix[j][i] !== matrix[0][i]) {
        return result;
      } else if (j === matrix.length - 1) {
        result += matrix[0][i];
      }
    }
  }

  return result;
};

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
console.log(longestCommonPrefix(['']));
