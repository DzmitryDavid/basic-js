const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!date.getTime === date.getTime()) {
    throw new Error("Error")
  }

  let month = date.getMonth();
  if (isNaN(month)) {
    return 'THROWN';
  }
  if (month < 2 || month === 11) {
    return 'winter';
  } if (month > 1 && month < 5) {
    return 'spring';
  } if (month > 4 && month < 8) {
    return 'summer';
  } if (month > 7 && month < 11) {
    return 'autumn';
  }
};
