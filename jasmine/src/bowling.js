'use strict';

var BowlingScorecard = function() {
  this.knockedDownPins = 0;
  this.frame = []
  this.total = []
  this.frameCount = 0
};

BowlingScorecard.prototype.getCurrentRollScore = function() {
  return this.knockedDownPins;
};

BowlingScorecard.prototype.rollScore = function(knockedDownPins) {
  this.knockedDownPins = knockedDownPins;
  this.frameScore();

  if(this.strike()) {
    return;
  };
};

BowlingScorecard.prototype.frameScore = function() {
  this.frame.push(this.knockedDownPins);
};

BowlingScorecard.prototype.strike = function() {
  if (this.frame[0] === 10) {
    this.frame.push(0);
  };
};

BowlingScorecard.prototype.isFrameOver = function() {
  return this.frame.length === 2
};

BowlingScorecard.prototype.totalScore = function() {
  if(this.isFrameOver()) {
    this.total.push(this.frame);
    this.frame = []
  };
    return;
};

BowlingScorecard.prototype.cumScore = function() {
  var scores = this.total.flat();
  var cumScores = scores.reduce(function(accumulator, score) {
    return accumulator + score;
  }, 0);
  return cumScores
};

BowlingScorecard.prototype.counter = function() {
  return this.frameCount = this.total.length;
};

BowlingScorecard.prototype.previousFrame1 = function() {
  if(this.frameCount > 1) {
    return this.total[this.frameCount - 2];
  };
};

BowlingScorecard.prototype.isPreviousFrameStrike1 = function() {
  if(this.frameCount > 1) {
    var frame = this.previousFrame1();
    return frame[0] === 10 && frame[1] === 0;
  };
};

BowlingScorecard.prototype.bonusStrike1 = function() {
  if(this.isPreviousFrameStrike1()) {
      var frame = this.total[this.frameCount - 1]
      var bonusScore = frame.reduce(function(accumulator, score) {
        return accumulator + score;
      }, 0);
      this.previousFrame1().push(bonusScore);
  };
    return;
};

BowlingScorecard.prototype.previousFrame2 = function() {
  if(this.frameCount > 2) {
    return this.total[this.frameCount - 3];
  };
};

BowlingScorecard.prototype.isPreviousFrameStrike2 = function() {
  if(this.frameCount > 2) {
    var frame = this.previousFrame2();
    return frame[0] === 10 && frame[1] === 0;
  };
};

BowlingScorecard.prototype.bonusStrike2 = function() {
  if(this.isPreviousFrameStrike2() && this.isPreviousFrameStrike1()) {
      var bonusScore = this.total[this.frameCount - 1][0]
      this.previousFrame2().push(bonusScore);
  };
    return;
};

BowlingScorecard.prototype.isPreviousFrameSpare = function() {
  if(this.frameCount > 1) {
    var frame = this.previousFrame1();
    var score = frame.reduce(function(accumulator, score) {
      return accumulator + score;
    }, 0);
    return frame[0] < 10 && score === 10;
  };
};

BowlingScorecard.prototype.bonusSpare = function() {
  if(this.isPreviousFrameSpare()) {
    var bonusScore = this.total[this.frameCount - 1][0]
    this.previousFrame1().push(bonusScore);
  };
};

BowlingScorecard.prototype.isLastFrameStrike = function() {
  return this.frameCount === 10 && this.total[9][0] === 10;
};

BowlingScorecard.prototype.lastFrameStrikeBonus = function(bonusRoll1, bonusRoll2) {
  if(this.isLastFrameStrike() && this.isPreviousFrameStrike1()) {
    var bonusScore = bonusRoll1 + bonusRoll2
    this.total[9].push(bonusScore)
    this.total[8].push(bonusRoll1)
  } else if (this.isLastFrameStrike()) {
      var bonusScore = bonusRoll1 + bonusRoll2
      this.total[9].push(bonusScore)
  };
};

BowlingScorecard.prototype.isLastFrameSpare = function() {
  var lastFrame = this.total[9]
  var lastFrameScore = lastFrame.reduce(function(accumulator, score) {
    return accumulator + score;
  }, 0);
  return lastFrame[0] < 10 && lastFrameScore === 10;
};

BowlingScorecard.prototype.lastFrameSpareBonus = function(bonusRoll1) {
  if(this.isLastFrameSpare()) {
    this.total[9].push(bonusRoll1);
  };
};

BowlingScorecard.prototype.game = function() {
  this.totalScore();
  this.counter();
  this.bonusStrike1();
  this.bonusStrike2();
  this.bonusSpare();
};
