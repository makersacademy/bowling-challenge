var BowlingCalculator = function() {
  this.totalScore = 0;
  this.balls = [];
};

BowlingCalculator.prototype.endTurn = function() {
  var turnScore = this.balls.reduce(function(a, b){
    return a + b;}, 0)
  this.addToScore(turnScore);
  this.balls = [];
};

BowlingCalculator.prototype.addToScore = function(number) {
  this.totalScore += number
};

BowlingCalculator.prototype.throwBall = function(pins) {
  this.validateThrowBall(pins);
  this.balls.push(pins);
};

BowlingCalculator.prototype.validateThrowBall = function(number) {
  this.isNegativeNumber(number);
  this.isNotANumber(number);
  this.isHigherThanTen(number);
};

BowlingCalculator.prototype.isNegativeNumber = function(number) {
  if (number < 0) {
    throw new Error("Invalid input: negative number.");
  };
};

BowlingCalculator.prototype.isNotANumber = function(number) {
  if (isNaN(number)) {
    throw new Error("Invalid input: not a number.")
  };
};

BowlingCalculator.prototype.isHigherThanTen = function(number) {
  if (number > 10) {
    throw new Error("Invalid input: max score per throw is 10")
  }
};
