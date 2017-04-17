'use strict';

var Bowling = function() {
  this.rollHistory = [];
  this.frameNumber = 1;
  this.rollsThisFrame = 0;
  this.pinsRemaining = 10;
};

Bowling.prototype.getFrameNumber = function () {
  return this.frameNumber;
};

Bowling.prototype.roll = function (pins) {
  if (pins > this.pinsRemaining) {
    throw new TypeError('Invalid number of pins knocked over');
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
  if (this.frameNumber < 11) {
    this.frameNumber += 1;
  } else {
    this.frameNumber = 11;
  }
};

Bowling.prototype.getCurrentScore = function () {
  var gameScore = 0;
  var rollIndex = 0;
  var game = this;

  for (var frameIndex = 0; frameIndex < this.frameNumber-1; frameIndex++) {
    if (isStrike()) {
      gameScore += getStrikeScore();
      rollIndex += 1;
    } else if (isSpare()) {
      gameScore += getSpareScore();
      rollIndex += 2;
    } else {
      gameScore += getNormalScore();
      rollIndex += 2;
    }
  }
  return gameScore;

  function isStrike() {
    return game.rollHistory[rollIndex] === 10;
  }

  function isSpare() {
    return game.rollHistory[rollIndex] + game.rollHistory[rollIndex + 1] === 10;
  }

  function getStrikeScore() {
    if (typeof game.rollHistory[rollIndex + 2] === 'undefined') {
        return 0;
    } else {
        return game.rollHistory[rollIndex] + game.rollHistory[rollIndex + 1] + game.rollHistory[rollIndex + 2];
    }
  }

  function getSpareScore() {
    if (typeof game.rollHistory[rollIndex + 2] === 'undefined') {
        return 0;
    } else {
        return game.rollHistory[rollIndex] + game.rollHistory[rollIndex + 1] + game.rollHistory[rollIndex + 2];
    }
  }

  function getNormalScore() {
    return game.rollHistory[rollIndex] + game.rollHistory[rollIndex + 1];
  }
};
