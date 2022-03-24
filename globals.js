export const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

export const insert = (arr, index, destination) => {
  const element = arr[index];
  arr.splice(index, 1);
  arr.splice(destination, 0, element);
  return arr;
};

export const timed = (func, arg) => {
  console.time();
  const result = func(arg);
  console.timeEnd();
  return result;
};

export const generateArr = (length, range) =>
  Array.from({ length }, () => Math.floor(Math.random() * range));
