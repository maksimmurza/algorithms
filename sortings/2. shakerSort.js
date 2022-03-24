import { swap, timed, generateArr } from '../globals.js';

/*
  Как и в пузырьковой сортировке, последовательно сравниваются соседние элементы,
  однако проход по массиву осуществляется как слева направо, так и справа налево.
  Примечательно, что каждый из таких проходов не доводится до конца, так как на 
  предыдущем проходе последние (или первые) два элемента уже были сравнены. Более того,
  область прохода сужается после каждой итерации.
*/

export const shakerSort = arr => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    for (let i = left; i <= right; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }

    right--;

    for (let i = right; i >= left; i--) {
      if (arr[i] < arr[i - 1]) {
        swap(arr, i, i - 1);
      }
    }

    left++;
  }

  return arr;
};

console.log(timed(shakerSort, generateArr(100, 1000)));
