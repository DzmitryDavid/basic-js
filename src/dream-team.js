const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  const arr = [];
  if (Array.isArray(members)) {
    members.forEach(m => {
      if (typeof m === 'string') {
        const arrName = m.trim().split(' ');
        arr.push(arrName[0].toUpperCase())
      }
    });
    const sortArr = arr.sort();
    const result = sortArr.reduce((acc, item) => {
      return acc += item.slice(0, 1);
    }, '')
    return result;
  } else return false;
};

