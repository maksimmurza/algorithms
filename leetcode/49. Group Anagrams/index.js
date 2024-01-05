/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = strs => {
  const foo = strs
    .map(str => {
      return {
        original: str,
        sorted: str.split('').sort().join(''),
      };
    })
    .sort((a, b) => {
      if (a.sorted > b.sorted) {
        return 1;
      } else if (a.sorted < b.sorted) {
        return -1;
      } else {
        return 0;
      }
    });

  const result = [{ sorted: foo[0].sorted, array: [foo[0].original] }];
  for (let i = 1; i < foo.length; i++) {
    if (result.at(-1).sorted === foo[i].sorted) {
      result.at(-1).array.push(foo[i].original);
    } else {
      result.push({ sorted: foo[i].sorted, array: [foo[i].original] });
    }
  }

  return result.map(result => result.array);
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
