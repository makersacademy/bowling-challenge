'use strict';

var BowlingCalculator = function() {
  this.score = [];
  this.currentBalls = [];
  this.previousBalls = [];
  this.frames = 10;
  this.throws = 2;
};

BowlingCalculator.prototype.endTurn = function() {
  this._addBonus();
  this._pushTurnToScore();
  this.previousBalls.push(this.currentBalls);
  this._clearCurrentTurn();
  this._reduceFrames();
  this._resetThrows();
};

BowlingCalculator.prototype._addBonus = function() {
  var lastScoreIndex = this.score.length - 1;
  var lastScore = this.score[lastScoreIndex];
  var turnSum = this.currentBalls.reduce(function(a, b){
    return a + b;
  }, 0);

  if (this._isStrikeLastTurn()) {
    this.score.splice(lastScoreIndex, 1, lastScore + turnSum);
  };

  if (this._isSpareLastTurn()) {
    var firstBall = this.currentBalls[0];
    this.score.splice(lastScoreIndex, 1, lastScore + firstBall);
  };
};

BowlingCalculator.prototype._pushTurnToScore = function() {
  var turnSum = this.currentBalls.reduce(function(a, b) {
    return a + b;
  }, 0)
  this.score.push(turnSum);
};

BowlingCalculator.prototype._clearCurrentTurn = function() {
  this.currentBalls = [];
};

BowlingCalculator.prototype._reduceFrames = function() {
  this.frames -= 1;
};

BowlingCalculator.prototype._resetThrows = function() {
  this.throws = 2;
}

BowlingCalculator.prototype.throwBall = function(pins) {
  this._hasFramesLeft();
  this._hasThrowsLeft();
  this._validateThrowBall(pins);
  this.currentBalls.push(pins);
  this._setThrows();
};

BowlingCalculator.prototype._hasFramesLeft = function() {
  if (this.frames === 0) {
    throw new Error("No frames left.");
  };
};

BowlingCalculator.prototype._hasThrowsLeft = function() {
  if (this.throws === 0) {
    throw new Error("No throws left.");
  };
};

BowlingCalculator.prototype._validateThrowBall = function(number) {
  this._isNotANegativeNumber(number);
  this._isNotANumber(number);
  this._isNotHigherThanTen(number);
  this._doesNotSumToMoreThanTen(number);
};

BowlingCalculator.prototype._isNotANegativeNumber = function(number) {
  if (number < 0) {
    throw new Error("Invalid input: negative number.");
  };
};

BowlingCalculator.prototype._isNotANumber = function(number) {
  if (isNaN(number)) {
    throw new Error("Invalid input: not a number.")
  };
};

BowlingCalculator.prototype._isNotHigherThanTen = function(number) {
  if (number > 10) {
    throw new Error("Invalid input: max score per throw is 10")
  }
};

BowlingCalculator.prototype._doesNotSumToMoreThanTen = function(number) {
  if (number + this.currentBalls[0] > 10) {
    throw new Error("Invalid input: trying to score more than 10 pins")
  }
};

BowlingCalculator.prototype._setThrows = function() {
  this.currentBalls == 10 ? this.throws = 0 : this.throws -= 1;
};

BowlingCalculator.prototype.totalScore = function() {
  if (this.frames === 10) {
    return 0;
  } else {
    var totalScore = this.score.reduce(function(a, b) {
      return a + b;
    }, 0)
    return totalScore;
  }
};

BowlingCalculator.prototype._isStrikeLastTurn = function() {
  var lastBallIndex = this.previousBalls.length - 1;
  var previousBall = this.previousBalls[lastBallIndex];

  if (previousBall == 10) {
    return true;
  } else {
    return false;
  };
};

BowlingCalculator.prototype._isSpareLastTurn = function() {
  var lastItemIndex = this.score.length - 1;
  var lastScoreItem = this.score[lastItemIndex];

  if (lastScoreItem == 10 && !this._isStrikeLastTurn()) {
    return true;
  } else {
    return false;
  };

};
