const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(direct = true) {
    this.direct = direct;
	}
	
  encrypt(text, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		if (!(text && key)) throw new Error('Incorrect arguments!');
    let res = '';
    key = key.toUpperCase();
    text = text.toUpperCase();
    let keyPos = 0;
    for (let index in text) {
      if (text.charCodeAt(index) < 65 || text.charCodeAt(index) > 90) {
        res = res + text[index];
      } else {
        res = res + String.fromCharCode(
          (text.charCodeAt(index) + key.charCodeAt(keyPos % key.length) -
            130) % 26 + 65);
        keyPos = keyPos + 1;
      }

    }
    return this.direct ? res : res.split('').reverse().join('');
	}
	
  decrypt(text, key) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
		if (!(text && key)) throw new Error('Incorrect arguments!');
    let res = '';
    key = key.toUpperCase();
    text = text.toUpperCase();
    let keyPos = 0;

    for (let index in text) {
      if (text.charCodeAt(index) < 65 || text.charCodeAt(index) > 90) {
        res = res + text[index];
      } else {
        res = res + String.fromCharCode((text.charCodeAt(index) -
          key.charCodeAt(keyPos % key.length) + 26) % 26 + 65);
        keyPos = keyPos + 1;
      }
    }
    return this.direct ? res : res.split('').reverse().join('');
  }

}

module.exports = {
  VigenereCipheringMachine
};
