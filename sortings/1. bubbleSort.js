import { swap, timed, generateArr } from '../globals.js';

/*
  Итерации прохода по массиву осуществляются до тех пор, пока он не будет отсортирован. 
  Проход состоит из шагов, во время каждого из которых производится сравнение
  текущего элемента со следующим в массиве за ним. Эти элементы меняются местами при необходимости.
*/

const bubbleSort = arr => {
  let notSorted = true;

  while (notSorted) {
    notSorted = false;
    for (let i = 0; i <= arr.length - 2; i++) {
      if (arr[i] > arr[i + 1]) {
        notSorted = true;
        swap(arr, i, i + 1);
      }
    }
  }

  return arr;
};

console.log(timed(bubbleSort, generateArr(100, 1000)));
