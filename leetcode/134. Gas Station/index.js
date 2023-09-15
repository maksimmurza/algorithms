/**
 * Мы можем начать путь с той заправки, кол-во топлива на которой больше,
 * чем то, которое надо для того, чтобы добраться до следующей.
 *
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  for (let start = 0; start <= gas.length - 1; start++) {
    // find station to begin with...
    if (gas[start] < cost[start]) {
      continue;
    }

    let tank = 0;
    let currentStation = start;

    do {
      tank += gas[currentStation] - cost[currentStation];

      if (tank < 0) {
        break;
      }

      if (currentStation === gas.length - 1) {
        currentStation = 0;
      } else {
        currentStation++;
      }
    } while (currentStation !== start);

    if (currentStation === start) {
      return start;
    }
  }

  return -1;
};

// console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
console.log(canCompleteCircuit([3, 3, 4], [3, 4, 4]));
