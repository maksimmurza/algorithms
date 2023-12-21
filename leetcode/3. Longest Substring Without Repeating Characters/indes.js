/**
 * @param {string} s
 * @return {number}
 *
 *
 *
 */
const lengthOfLongestSubstring = s => {
  let start = 0;
  let end = 0;
  let maxLength = s.length !== 0 ? 1 : 0;
  let substring = [s[start]];
  let duplicateIndex;

  const nextSymbolIsDuplicated = () => {
    const nextSym = s[end + 1];
    const substringIndexDuplicate = substring.findIndex(
      item => nextSym === item
    );

    if (substringIndexDuplicate >= 0) {
      duplicateIndex = start + substringIndexDuplicate;
      return true;
    }

    return false;
  };

  while (start <= end && end < s.length) {
    if (!s[end + 1]) {
      maxLength = Math.max(substring.length, maxLength);
      break;
    } else if (nextSymbolIsDuplicated()) {
      maxLength = Math.max(substring.length, maxLength);
      start = duplicateIndex + 1;
      end = start;
      substring = [s[start]];
    } else {
      end++;
      substring.push(s[end]);
    }
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring('anviaj'));
console.log(lengthOfLongestSubstring('dvdf'));
console.log(lengthOfLongestSubstring('au'));
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring(''));
