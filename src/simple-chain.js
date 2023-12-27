const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	array: [],

  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		return this.array.length;
	},
	
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		if (value === "") {
      this.array.push("( )~~");
    } else this.array.push(`( ${value} )~~`);
    return this;
	},
	
  removeLink(position) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		if (position <= 0 || typeof position !== "number" || position > this.array.length) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
	},
	
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		this.array.reverse();
    return this;
	},
	
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		let newChainString = this.array.join('').slice(0, -2);
    this.array = [];
    return newChainString;
  }
};

module.exports = {
  chainMaker
};
