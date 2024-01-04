/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = (s, t) => {
  const pairs = new Map([[s[0], t[0]]]);

  for (let i = 1; i < s.length; i++) {
    if (pairs.has(s[i])) {
      if (pairs.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      pairs.set(s[i], t[i]);
    }
  }

  return pairs.size === new Set(pairs.values()).size;
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('badc', 'baba'));
