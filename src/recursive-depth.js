const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  
  calculateDepth(arr) {

    let arrayCounter = 1;
    let filteredArr = arr.filter(arr => Array.isArray(arr));

    if (filteredArr.length > 0) {
      filteredArr = filteredArr.flat();
      arrayCounter += this.calculateDepth(filteredArr);
    }
    
    return arrayCounter;
  }
};


