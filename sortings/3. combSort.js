import { swap, timed, generateArr } from '../globals.js';

/*
  Принцип как у пузырьковой, но сравниваются не 2 соседних элемента, а элементы на
  расстоянии шага, который с каждой итерацией уменьшается делением на 1.247 (magic number)
*/

export const combSort = arr => {
  const factor = 1.247;
  let step = arr.length - 1;

  while (step >= 1) {
    for (let i = 0; i + step <= arr.length - 1; i++) {
      if (arr[i] > arr[Math.round(i + step)]) {
        swap(arr, i, Math.round(i + step));
      }
    }
    step /= factor;
  }

  return arr;
};

console.log(timed(combSort, generateArr(100, 1000)));
