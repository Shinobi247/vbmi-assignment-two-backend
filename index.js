const {
  calculateHealthRisk,
  bmiCalculator
} = require("./services/bmiRiskIndicator");
const { USER_DATA } = require("./MOCK_DATA");

exports.handler = (usersData) => {
  const BMI_DATA = usersData.map((user) =>
    calculateHealthRisk(bmiCalculator(user.HeightCm, user.WeightKg))
  );
  const overWeightCount = (BMI_DATA.filter((e) => e.BMI >= 25) || []).length;
  console.log(`There are ${overWeightCount} overweight people`);
};

this.handler(USER_DATA);
