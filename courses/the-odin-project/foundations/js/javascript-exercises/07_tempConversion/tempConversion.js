const ftoc = function (tempInput) {
  return parseFloat(((tempInput - 32) * 5 / 9).toFixed(1))

};

const ctof = function (tempInput) {
  return parseFloat((tempInput * 9 / 5 + 32).toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
