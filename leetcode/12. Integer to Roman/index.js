const romanSymbols = {
  1: 'I',
  5: 'V',
  10: 'X',
  50: 'L',
  100: 'C',
  500: 'D',
  1000: 'M',
};

const substraction = {
  4: 'IV',
  9: 'IX',
  40: 'XL',
  90: 'XC',
  400: 'CD',
  900: 'CM',
};

const getZeros = num => {
  if (num === 0) return '';
  return Array(num).fill('0').join('');
};

const getIntegerArray = num => {
  return num
    .toString()
    .split('')
    .reverse()
    .reduceRight((values, item, index) => {
      if (Number(item) > 0) {
        return [...values, Number(`${item}${getZeros(index)}`)];
      } else {
        return values;
      }
    }, []);
};

const getRomanArray = integerArray => {
  return integerArray.map(value => {
    const exception = substraction[value];
    if (exception) {
      return exception;
    }

    let integer = value;
    let remainder = 0;
    let roman = '';

    do {
      const s = Object.keys(romanSymbols)
        .reverse()
        .find(key => {
          if (integer >= key) {
            if (integer % Number(key) > 0) {
              remainder = integer % Number(key);
            } else {
              remainder = integer - Number(key);
            }
            return true;
          } else {
            return false;
          }
        });
      integer = remainder;
      roman = roman.concat(romanSymbols[Number(s)]);
    } while (remainder > 0);

    return roman;
  });
};

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = num => {
  const integerArray = getIntegerArray(num);
  const romanValues = getRomanArray(integerArray);
  return romanValues.join('');
};

console.log(intToRoman(1000));
