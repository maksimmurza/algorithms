/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 *
 * Все сводится к сравнению 2ух хэш-мапов
 */
const canConstruct = (note, magazine) => {
  const hash = new Map();
  for (let i = 0; i < magazine.length; i++) {
    const currentValue = hash.get(magazine[i]);
    hash.set(magazine[i], currentValue ? currentValue + 1 : 1);
  }

  for (let i = 0; i < note.length; i++) {
    const currentValue = hash.get(note[i]);
    if (currentValue) {
      hash.set(note[i], currentValue - 1);
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct('abaca', 'aacbva'));
