/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => {
  const symbols = s.match(/[a-zA-Z0-9]/g);

  if (!symbols) {
    return true;
  }

  const filteredArray = symbols.map(symbol => symbol.toLowerCase());

  for (let i = 0, j = filteredArray.length - 1; i <= j; i++, j--) {
    if (filteredArray[i] !== filteredArray[j]) {
      return false;
    }
  }

  return true;
};

console.log(isPalindrome('A man, a pln, a canal: Panama'));
