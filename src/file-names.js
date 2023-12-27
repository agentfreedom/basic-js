const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
	let newNames = [];
  for(let i = 0; i< names.length; i++){
    let newItem = names[i];
    if(newNames.includes(newItem)){
      let count = names.filter((x, index) => x === newItem && index < i).length;
      count = count < 1 ? 1 : count;
      newItem += "("+count+")";
    }
      newNames.push(newItem)
  }
  return newNames;
}

module.exports = {
  renameFiles
};
