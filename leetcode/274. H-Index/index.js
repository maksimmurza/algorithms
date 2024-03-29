/**
 * Геометрически это надо будет найти самый большой квадрат, если отсортировать массив.
 * Делать справа налево, от большего к меньшему. От крайнего правого столбца, двигаясь
 * влево, мы на каждом шаге проверяем имеет ли текущий столбец столько "кубиков"
 * (число столбца), сколько мы ступили шагов влево (равна ли высота пройденой
 * ширине - имеем ли мы квадрат). В момент когда ответ на данный вопрос - "нет",
 * выходим из цикла, возвращая ласт значение, для кот. ответом было "да".
 *
 *
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  let hIndex = 0;
  const sorted = citations.sort((a, b) => a - b).reverse();

  for (let i = 0; i <= sorted.length - 1; i++) {
    if (sorted[i] >= i + 1) {
      hIndex++;
    } else {
      break;
    }
  }

  return hIndex;

  // return citations
  //   .sort((a, b) => a - b)
  //   .reverse()
  //   .reduce((hIndex, value, i, arr) => {
  //     if (arr[i] >= i + 1) {
  //       return hIndex + 1;
  //     } else {
  //       return hIndex;
  //     }
  //   }, 0);
};

// console.log(hIndex([3, 0, 6, 1, 5]));
console.log(hIndex([1, 1, 3, 6, 7, 10, 7, 1, 8, 5, 9, 1, 4, 4, 3]));
