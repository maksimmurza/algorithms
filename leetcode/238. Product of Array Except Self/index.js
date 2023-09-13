/**
 * Зная произведение абсолютно всех элементов, можно было бы делить на текущий элемент,
 * но деление использовать нельзя.
 *
 * const fullProduct = nums.reduce((product, item) => product * item, 1);
 * return nums.map(item => fullProduct / item);
 *
 * Если делать "в лоб", то придется каждый раз перемножать одинаковые числа
 * Нужно как-то сохранять уже перемноженное, что-то типо свертки
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = nums => {
  return nums.map((_, index) => {
    return nums.reduce(
      (product, item, currentIndex) => product * (index === currentIndex ? 1 : item),
      1
    );
  });
};

console.log(productExceptSelf([1, 2, 3, 4]));
