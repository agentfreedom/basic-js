const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	if (!Array.isArray(arr)) {
		throw new Error('\'arr\' parameter must be an instance of the Array!');
	}
	
	let array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next' && i !== arr.length - 1) {
      array.push(null);
      i++;
    } else if (arr[i] === '--discard-prev' && i !== 0) {
      array.pop();
    } else if (arr[i] === '--double-prev' && i !== 0 && array[array.length - 1] != null) {
      array.push(arr[i - 1]);
    } else if (arr[i] === '--double-next' && i !== arr.length - 1) {
      array.push(arr[i + 1]);
      array.push(arr[i + 1]);
      i++;
    } else if (arr[i] === '--double-next' || arr[i] === '--discard-next' && i == arr.length - 1) {
      array.push(null);
    } else if (arr[i] === '--double-prev' || arr[i] === '--discard-prev' && i == 0) {
      array.push(null);
    }
    else {
      array.push(arr[i]);
    }
  }

  let result = [];

  for (let el of array) {
    if (el != null) result.push(el);
  }

  return result;
}

module.exports = {
  transform
};
