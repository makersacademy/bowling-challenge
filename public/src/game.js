"use strict";

function Game() {
  this.throws = [];
  this.throwsRemaining = 21;
  this.frameRunningTotals = [];
  this.totalScore = 0;
  this.showTotal = 0;
  this.frameNumber = 1
  this.throwNumber = 1
}

Game.prototype.throw = function(score) {

  if (this.throwsRemaining === 0) {
    this.resetGame();
  }

  var index = this.throws.length;

  if (this.throwsRemaining === 2) {
    this.frameTenThrowTwo(score, index);
  } else if (this.throwsRemaining === 1) {
    this.frameTenThrowThree(score, index);
  } else {
    this.normalThrow(score, index);
  }
};

Game.prototype.normalThrow = function(score, index) {

  this.addScore(score);

  this.addToFrameTotals(score);

  var frameIndex = this.frameRunningTotals.length;

  this.checkForStrikePrevs(score, index, frameIndex);

  this.checkForStrikePrevsPrevs(score, index, frameIndex);

  this.checkForSparePrevs(score, index, frameIndex);

  if (index > 0 && this.throwsRemaining % 2 === 0 &&
    score + this.throws[index - 1] !== 10) {
    this.showTotal += score + this.throws[index - 1];
  }

  if (this.throwsRemaining % 2 !== 0) {
    this.frameNumber++;
  }

  this.reduceThrowsRemaining(score);

  index += 1;
};

Game.prototype.frameTenThrowTwo = function(score, index) {

  this.frameNumber = 10
  this.addScore(score);

  this.frameRunningTotals[9] += score;

  // If not a strike prevs or a spare remove last bonus throw
  if (this.throws[index - 1] !== 10 && this.throws[index - 1] + score < 10) {
    this.throwsRemaining -= 1;
  }

  // check for PrevsPrevsStrikeAlternative
  if (this.throws[index - 2] === 10) {
    this.totalScore += score;
    this.frameRunningTotals[8] += score;
    this.showTotal = this.totalScore;
  }

  if (this.throwsRemaining % 2 === 0 && score + this.throws[index - 1] !== 10) {
    this.showTotal = this.totalScore;
  }

  this.throwsRemaining -= 1;
  index += 1;
};

Game.prototype.frameTenThrowThree = function(score, index) {

  this.frameNumber = 10

  this.addScore(score);

  this.frameRunningTotals[9] += score;

  this.throwsRemaining -= 1;

  this.showTotal = this.totalScore
  index += 1;
};

Game.prototype.reduceThrowsRemaining = function(score) {
  if (score === 10 && this.throwsRemaining > 3) {
    this.throwsRemaining -= 2;
  } else {
    this.throwsRemaining -= 1;
  }
};

Game.prototype.checkForSparePrevs = function(score, index, frameIndex) {
  if (index > 1 && this.throwsRemaining % 2 !== 0 &&
    this.throws[index - 2] + this.throws[index - 1] === 10) {
    this.totalScore += score;
    this.frameRunningTotals[frameIndex - 2] += score;
    this.showTotal += score + this.throws[index -1] + this.throws[index -2];
  }
};

Game.prototype.checkForStrikePrevs = function(score, index, frameIndex) {
  if (index > 0 && this.throws[index - 1] === 10) {
    this.totalScore += score;
    this.frameRunningTotals[frameIndex - 2] += score;
  }
};

Game.prototype.checkForStrikePrevsPrevs = function(score, index, frameIndex) {
  if (index > 1 && this.throws[index - 2] === 10) {
    this.totalScore += score;
    this.showTotal += score + this.throws[index - 1] + 10
    if (this.throwsRemaining % 2 !== 0) {
      this.frameRunningTotals[frameIndex - 3] += score;
    } else {
      this.frameRunningTotals[frameIndex - 2] += score;
    }
  }
};

Game.prototype.addToFrameTotals = function(score) {
  if (this.throwsRemaining % 2 !== 0) {
    this.frameRunningTotals.push(score);
  } else {
    this.frameRunningTotals[this.frameRunningTotals.length - 1] += score;
  }
};

Game.prototype.addScore = function(score) {
  this.totalScore += score;
  this.throws.push(score);
};

Game.prototype.resetGame = function() {
  this.throws = [];
  this.throwsRemaining = 21;
  this.frameRunningTotals = [];
  this.totalScore = 0;
  this.showTotal = 0;
  this.frameNumber = 1;
};

Game.prototype.receiveFrame = function (frame) {
  this._frames.push(frame)
};

Game.prototype.isStrike = function (score) {
  score === 10;
};
