"use strict";


var Scorecard = function () {
  this.frames = [];
  this.rolls = [];
  this.bonus = 0;
  this.frameNumber = 1;
  this.frameScore = 0;
  this.rollCount = 0;
  this.pinCount = 10;
  this.totalScore = [];
  this.points = [];
  this.gameOver = false;
}

Scorecard.prototype.roll = function (pins) {
  this.rolls.push(pins);
};

Scorecard.prototype.score = function () {
  var result = 0;
  var rollIndex = 0;
  var scorecard = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      result += getStrikeScore();
      rollIndex++;
    }
    else if (isSpare()) {
      result += getSpareScore();
      rollIndex += 2;
    }
    else {
      result += getNormalScore();
      rollIndex += 2;
    }
  }
  return result;

  function isStrike() {
    return scorecard.rolls[rollIndex] === 10;
  }

  function isSpare() {
    return scorecard.rolls[rollIndex] + scorecard.rolls[rollIndex + 1] == 10;
  }
  function getStrikeScore() {
    return scorecard.rolls[rollIndex] + scorecard.rolls[rollIndex + 1] + scorecard.rolls[rollIndex + 2];
  }
  function getSpareScore() {
    return scorecard.rolls[rollIndex] + scorecard.rolls[rollIndex + 1] + scorecard.rolls[rollIndex + 2];
  }
  function getNormalScore() {
    return scorecard.rolls[rollIndex] + scorecard.rolls[rollIndex + 1];
  }
};


Scorecard.prototype.frameNumber = function() {
  if (this.frameNumber > 10) {
    return true
  }
  else 
  (this.frameNumber < 10)
  {
    return false
  }
};

Scorecard.prototype.gameOver = function() {
  if (this.frameNumber > 10) {
    return true
  }
};