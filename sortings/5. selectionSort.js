import { insert, generateArr, timed, swap } from '../globals.js';

/*
  На каждом проходе ищется минимальное значение массива и вставляется в начало, 
  после вставленных ранее (а потому - уже отсортированных) значений.
*/

export const selectionSort = arr => {
  let j = 0;
  while (j <= arr.length - 1) {
    let min = { value: arr[j], index: j };
    for (let i = j + 1; i < arr.length; i++) {
      if (arr[i] < min.value) {
        min = { value: arr[i], index: i };
      }
    }
    swap(arr, j++, min.index);
  }
  return arr;
};

console.log(timed(selectionSort, generateArr(100, 1000)));
