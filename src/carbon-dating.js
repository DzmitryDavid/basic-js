const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const activityToNumber = parseFloat(sampleActivity);

  if (activityToNumber <= 0 || activityToNumber > MODERN_ACTIVITY || typeof sampleActivity !== 'string' || isNaN(activityToNumber)) {
    return false
  }

  const rateDecay = 0.693 / HALF_LIFE_PERIOD;
  const mathLog = Math.log(MODERN_ACTIVITY / activityToNumber);
  return Math.ceil(mathLog / rateDecay);
};


