const { BMI_RANGE } = require("../constants/contants");

const getBmiInfo = (bmiString) => {
  if (!+bmiString) {
    return "Please enter a number";
  }
  let item = null;
  Object.keys(BMI_RANGE).some(function (range) {
    let bmiRangePart = range.split("-");
    if (range.includes("below")) {
      if (+(bmiString + "") <= bmiRangePart[0]) {
        item = BMI_RANGE[range];
        return true;
      }
    } else if (range.includes("above")) {
      if (+(bmiString + "") >= bmiRangePart[0]) {
        item = BMI_RANGE[range];
        return true;
      }
    } else {
      if (
        // prefix plus to make string a number
        +(bmiString + "") >= bmiRangePart[0] &&
        +(bmiString + "") <= (bmiRangePart[1] || bmiRangePart[0])
      ) {
        item = BMI_RANGE[range];
        return true;
      }
    }
  });
  return {
    BMI: bmiString,
    BmiCategory: item.bmiCategory,
    HealthRisk: item.healthRisk
  };
};

const bmiCalculator = (height, weight) => {
  height = height / 100.0;
  return Math.floor(weight / (height * height));
};

const calculateHealthRisk = (bmiNumber) => {
  return getBmiInfo(bmiNumber);
};
module.exports = {
  calculateHealthRisk,
  bmiCalculator
};
