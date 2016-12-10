var BowlingCalculator = function () {
  this.totalScore = 0;
};

BowlingCalculator.prototype.addToScore = function(number) {
  this.totalScore += number
};
