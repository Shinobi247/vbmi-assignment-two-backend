const {
  calculateHealthRisk,
  bmiCalculator
} = require("./services/bmiRiskIndicator");
// Use USER_DATA as input for the handler function
const { USER_DATA } = require("./MOCK_DATA");

exports.handler = (usersData) => {
  try {
    if ((usersData || []).length < 1)
      throw new Error("Please input an array of User Information");

    const BMI_DATA = usersData.map((user) => {
      if (typeof user !== "object") throw new Error("Invalid Input");
      return calculateHealthRisk(bmiCalculator(user.HeightCm, user.WeightKg));
    });
    const overWeightCount = (BMI_DATA.filter((e) => e.BMI >= 25) || []).length;
    return `There are ${overWeightCount} overweight people`;
  } catch (error) {
    return error;
  }
};
