import { insert, generateArr, timed } from '../globals.js';

/*
  Слева направо проходим массив и для каждого элемента находим слева от него тот,
  который меньше него, когда нашли - вставляем после того, что меньше. Если не нашли -
  вставляем первым. Если взятый нами элемент больше ближайшего слева - беремся за 
  следующй тк то что слева уже отсортировано по возрастанию и значит там некуда вставлять
  наш элемент.
*/

export const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    if (arr[i] >= arr[j]) continue;
    while (j >= 0 && arr[i] < arr[j]) {
      j--;
    }
    insert(arr, i, j + 1);
  }

  return arr;
};

console.log(timed(insertionSort, generateArr(100, 1000)));
