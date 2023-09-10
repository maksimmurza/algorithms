/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = s => {
  const arr = s.split(/ +/).filter(word => word !== '');
  return arr.at(-1).length;
};

// "one two three"
// ['three', '', '']

console.log(lengthOfLastWord('   fly me   to   the moon  '));
