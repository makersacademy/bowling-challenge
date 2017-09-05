'use strict';

var Bowling = function() {
  this.frameNumber = 1; 
  this.rollsCurrentFrame = 0;
  this.pinsRemaining = 10;
  this.rolls = [];
}

Bowling.prototype.getFrameNumber = function() {
  return this.frameNumber;
}

Bowling.prototype.nextFrame = function() {
  this.rollsCurrentFrame = 0;
  this.pinsRemaining = 10;
  this.frameNumber < 11 ? this.frameNumber += 1 : this.frameNumber = 11;
}

Bowling.prototype.roll = function(pins) {
  if (pins > this.pinsRemaining) {
    throw new Error('Invalid number of pins knocked over');
  } else {
    this.rollsCurrentFrame += 1;
    this.rolls.push(pins);
    this.pinsRemaining -= pins;
    this.isFrameComplete();
  }
}

Bowling.prototype.isFrameComplete = function() {
  if (this.rollsCurrentFrame === 2 || (this.pinsRemaining === 0)) {
    this.nextFrame();
  } else {
    return false;
  }
};

Bowling.prototype.getCurrentScore = function() {
  var gameScore = 0;
  var rollIndex = 0;
  var game = this;

  function isStrike() {
    return game.rolls[rollIndex] === 10;
  }

  function isSpare() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1] === 10;
  }

  function getStrikeScore() {
    if (typeof game.rolls[rollIndex + 2] === 'undefined') {
        return 0;
    } else {
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }
  }

  function getSpareScore() {
    if (typeof game.rolls[rollIndex + 2] === 'undefined') {
        return 0;
    } else {
        return game.rolls[rollIndex] + game.rolls[rollIndex + 1] + game.rolls[rollIndex + 2];
    }
  }

  function getNormalScore() {
    return game.rolls[rollIndex] + game.rolls[rollIndex + 1];
  }


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
}
