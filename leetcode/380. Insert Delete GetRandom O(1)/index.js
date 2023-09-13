const RandomizedSet = function () {
  this.mySet = [];
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const present = this.mySet.slice(0, this.mySet.length).includes(val);
  if (!present) {
    this.mySet.push(val);
    return true;
  }
  return false;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const index = this.mySet.findIndex(item => item === val);
  if (index !== -1) {
    this.mySet.splice(index, 1);
    return true;
  }

  return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const random = Math.floor(Math.random() * this.mySet.length);
  return this.mySet[random];
};

let obj = new RandomizedSet();
obj.insert(3);
obj.insert(3);
obj.getRandom();
obj.insert(1);
obj.remove(3);
obj.getRandom();
obj.getRandom();
obj.remove(1);
obj.insert(0);
obj.remove(0);
