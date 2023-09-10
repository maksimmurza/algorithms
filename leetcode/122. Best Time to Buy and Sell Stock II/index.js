/**
 * Нет смысла искать наивыгоднейший день продажи.  Можно купить и продать несколько раз, если между наименьшей
 * и наиб. ценой есть промежуточные.
 *
 *
 *
 *
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;
  let current = prices[0];

  prices.forEach(price => {
    if (price > current) {
      profit += price - current;
    }
    current = price;
  });

  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
