const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("A divisão por zero não é permitida.");
  }
  return a / b;
};

const inOneHour = () => {
  const now = Date.now();
  const oneHourInMili = 1 * 60 * 60 * 1000;
  return now + oneHourInMili;
};

const inOneWeek = () => {
  const now = Date.now();
  const oneWeekInMili = 7 * 24 * 60 * 60 * 1000;
  return now + oneWeekInMili;
};

module.exports = { sum, subtract, multiply, divide, inOneHour, inOneWeek };
