const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	let number = String(n).slice(1);
  for (i = 1; i < String(n).length; i += 1) {
    let x = String(n).substring(0, i) + String(n).substring(i + 1)
    if (Number(x) > Number(number)) {
      number = x;
    }
  }
  return Number(number);
}

module.exports = {
  deleteDigit
};
