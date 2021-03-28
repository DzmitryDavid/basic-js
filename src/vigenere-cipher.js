const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(machine) {
    this.machine = machine;
  }
  encrypt(message, key) {
    message = message.toUpperCase();
    let keycode = key.toUpperCase();

    const messageLength = message.length;
    keycode = keycode.repeat(Math.ceil(messageLength / key.length)).split('');

    let codeStr = "";

    for(let i = 0; i < messageLength; i += 1) {
      if(65 <= message.charCodeAt(i) &&  message.charCodeAt(i) < 91) {
        codeStr += String.fromCharCode(((message.charCodeAt(i) + keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        codeStr += message.charAt(i);
      }
    }

    if(this.machine === false) {
      return codeStr.split('').reverse().join('');
    }
    return codeStr;
  }    
  decrypt(message, key) {
    message = message.toUpperCase();
    let keycode = key.toUpperCase();

    const messageLength = message.length;
    keycode = keycode.repeat(Math.ceil(messageLength / key.length)).split('');

    let codeStr = "";

    for (let i = 0; i < messageLength; i += 1) {
      if (65 <= message.charCodeAt(i) &&  message.charCodeAt(i) < 91) {
        codeStr += String.fromCharCode(((message.charCodeAt(i) + 26 - keycode[0].charCodeAt(0)) % 26) + 65);
        keycode.shift();
      } else {
        codeStr += message.charAt(i);
      }
    }

    if (this.machine === false) {
      return codeStr.split('').reverse().join('');
    }
    return codeStr;
  }
}


module.exports = VigenereCipheringMachine;
