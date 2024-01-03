/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => {
  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // if opened
    if (Object.keys(brackets).includes(s[i])) {
      stack.push(s[i]);
      // if closed
    } else {
      // last opened must be in pair with closed
      const lastOpened = stack.pop();
      if (brackets[lastOpened] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('()'));
