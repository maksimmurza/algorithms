const RandomizedSet = function () {
  this.mySet = new Set();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const present = this.mySet.has(val);
  this.mySet.add(val);
  return !present;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  return this.mySet.delete(val);
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.mySet.size);
  return [...this.mySet][random];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
