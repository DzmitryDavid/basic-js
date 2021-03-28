const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (options.repeatTimes === undefined) options.repeatTimes = 1;
  if (options.separator === undefined) options.separator = "+";
  if (options.addition === undefined) options.addition = "";
  if (options.additionRepeatTimes === undefined)
    options.additionRepeatTimes = 1;

  if (options.additionSeparator === undefined)
    options.additionSeparator = "|";

  const repeatTimes = options.repeatTimes;
  const separator = options.separator;
  const addition = options.addition;
  const additionRepeatTimes = options.additionRepeatTimes;
  const additionSeparator = options.additionSeparator;
  
  let string = String(str);

  string += addition;

  for (let i = 1; i < additionRepeatTimes; i++) {
    string += additionSeparator + addition;
  }
  const repetedString = string;
  for (let i = 1; i < repeatTimes; i++) {
    string += separator + repetedString;
  }
  return string;
};
  