'use strict';

var Bowling = function() {
  this.rollHistory = [];
  this.currentScore = 0;
  this.frameNumber = 1;
  this.rollsThisFrame = 0;
  this.pinsRemaining = 10;
};

Bowling.prototype.getCurrentScore = function () {
  return this.currentScore;
};

Bowling.prototype.getFrameNumber = function () {
  return this.frameNumber;
};

Bowling.prototype.roll = function (pins) {
  if (pins > this.pinsRemaining) {
    throw new TypeError("Invalid number of pins knocked over")
  } else {
    this.rollsThisFrame += 1;
    this.rollHistory.push(pins);
    this.pinsRemaining -= pins;
    this.isFrameComplete();
  }
};

Bowling.prototype.isFrameComplete = function () {
  if (this.rollsThisFrame === 2 || (this.pinsRemaining === 0)) {
    this.nextFrame();
  } else {
    return false;
  }
};

Bowling.prototype.nextFrame = function () {
  this.rollsThisFrame = 0;
  this.pinsRemaining = 10;
  this.strikeThisFrame = false;
  this.frameNumber += 1;
};

Bowling.prototype.finalScore = function () {
  var gameResult = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (isStrike()) {
      gameResult += getStrikeScore();
      rollIndex += 1;
    } else if (isSpare()) {
      gameResult += getSpareScore();
      rollIndex += 2;
    } else {
      gameResult += getNormalScore();
      rollIndex += 2;
    }
  }
  return gameResult;

  function isStrike() {
    return game.rollHistory[rollIndex] === 10;
  }

  function isSpare() {
    return game.rollHistory[rollIndex] + game.rollHistory[rollIndex + 1] === 10;
  }

  function getStrikeScore() {
    return game.rollHistory[rollIndex] + game.rollHistory[rollIndex + 1] + game.rollHistory[rollIndex + 2];
  }

  function getSpareScore() {
    return game.rollHistory[rollIndex] + game.rollHistory[rollIndex + 1] + game.rollHistory[rollIndex + 2];
  }

  function getNormalScore() {
    return game.rollHistory[rollIndex] + game.rollHistory[rollIndex + 1];
  }
};
