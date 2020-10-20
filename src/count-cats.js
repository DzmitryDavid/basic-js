const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    return backyard.reduce((catsCount, yardRow) => {
      return catsCount + yardRow.filter(cell => cell === '^^').length;
    }, 0);
};
