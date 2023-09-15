/**
 * Нет необходимости во вложенном цикле. Мы можем определить, можем ли мы в принципе пройти круг
 * по тому, больше либо равна сумма эл-ов массива gas сумме эл-в cost. Если да, то можем, тк
 * общее кол-во топлива больше либо равно необходимому для перемещения между заправками.
 * Для этого достаточно одного прохода.
 *
 * Плюс к этому при проходе цикла на каждой позиции мы вычисляем текущее значение топлива. Если
 * его оказывается недостаточно, то позиция с которой мы начинали - не верна, как и все вплоть
 * до следующей после текущей, на которой мы сейчас, так как сначала был +, а на последних шагах
 * стал -.
 *
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let tank = 0,
    gasSum = 0,
    position = 0;
  for (let i = 0; i <= gas.length - 1; i++) {
    gasSum += gas[i] - cost[i];
    tank += gas[i] - cost[i];

    // if we are in position where tank is emty, so start position is wrong
    if (tank < 0) {
      position = i + 1;
      tank = 0;
    }
  }

  return gasSum < 0 ? -1 : position;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
// console.log(canCompleteCircuit([3, 3, 4], [3, 4, 4]));
