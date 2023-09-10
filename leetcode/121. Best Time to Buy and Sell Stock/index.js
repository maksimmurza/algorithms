/**
 * Достаточно одного прохода, мы можем узнавать максимальную прибыль для текущего эл-та просто запоминая минимальный до него.
 * Мы делаем одно действие из двух, исходя из того, какой прайс встретили. Либо Он становится минимальным относительно которого далее будем
 * высчитывать прибыль, или узнаем саму прибыль.
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let profit = 0;

  prices.forEach(price => {
    if (price <= min) {
      min = price;
    } else if (price - min > profit) {
      profit = price - min;
    }
  });

  return profit;
};

console.log(maxProfit([4, 1, 7, 9, 2, 11]));
