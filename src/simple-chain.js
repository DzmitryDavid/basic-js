const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain = this.chain.concat([value]);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') {
      this.chain = [];
      throw new Error('position argument should be a Number.');
    }
    if (position < 0) {
      this.chain = [];
      throw new Error('position argument should be a positive number.');
    }
    if (position > this.chain.length - 1) {
      this.chain = [];
      throw new Error('position argument shouldn\'t be out of chain length.');
    }
    this.chain = this.chain.filter((_, i) => i !== position - 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    const str = this.chain.map((c) => `( ${c} )`).join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
