var BowlingCalculator = function () {
  this.totalScore = 0;
};

BowlingCalculator.prototype.addToScore = function(number) {
  if (number < 0) {
    throw new Error("Invalid input: negative number.");
  }
  if (isNaN(number)) {
    throw new Error("Invalid input: not a number.")
  }
  this.totalScore += number
};
