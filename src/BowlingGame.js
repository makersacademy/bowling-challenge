'use strict';

var BowlingGame = function () {
  this.LOWESTSCORE = 0;
  this.HIGHESTSCORE = 300;
  this.MAXFRAMES = 10;
  this.score = 0;
  this.noOfFrames = [];
}

BowlingGame.prototype.addFrame = function (frame) {
  if (this._addFrameLimit() === true) {
    return 'Game is over';
  } else {
    this._incrementNoOfFrames(frame);
    this._incrementScore();
  }
}

BowlingGame.prototype.giveOutcome = function () {
  if (this._isLowest() === true) {
    return 'Gutter game! Too bad, try again next time!';
  } else if (this._isHighest() === true) {
    return 'Perfect game!';
  } else {
    return 'Your score is ' + this.score;
  }
}

BowlingGame.prototype._addFrameLimit = function () {
  return this.noOfFrames.length === this.MAXFRAMES;
}

BowlingGame.prototype._incrementNoOfFrames  = function (frame) {
  this.noOfFrames.push(frame);
}

BowlingGame.prototype._incrementScore = function () {
  if (this._andLastWereStrikes() === true) {
    this.score += (this._currentFrame().rollsTotal) + (this._currentFrame().rollsTotal) + (this._currentFrame().roll1);
  } else if (this._wasStrike() === true) {
    this.score += ((this._currentFrame().rollsTotal) + (this._currentFrame().rollsTotal));
  } else if (this._wasSpare() === true) {
    this.score += ((this._currentFrame().rollsTotal) + (this._currentFrame().roll1));
  } else {
    this.score += this._currentFrame().rollsTotal;
  }
}

BowlingGame.prototype._wasSpare = function () {
  if (this._isFirstFrame()){
    return false;
  } else {
    return (this._isLastFrame().rollsTotal === 10 && this._isLastFrame().roll1 != 10);
  }
}

BowlingGame.prototype._wasStrike = function () {
  if (this._isFirstFrame()){
    return false;
  } else {
    return (this._isLastFrame().roll1 === 10);
  }
}

BowlingGame.prototype._andLastWereStrikes = function () {
  if (this._isFirstOrSecondFrame()) {
    return false;
  } else {
    return ((this._isLastFrame().roll1 === 10) && (this._isLastFrame().roll1 === 10));
  }
}

BowlingGame.prototype._isLowest = function () {
  return this.score === this.LOWESTSCORE;
}

BowlingGame.prototype._isHighest = function () {
  return this.score === this.HIGHESTSCORE;
}

BowlingGame.prototype._currentFrame =  function () {
  return this.noOfFrames[this.noOfFrames.length-1];
}

BowlingGame.prototype._isLastFrame =  function () {
  return this.noOfFrames[this.noOfFrames.length-2];
}

BowlingGame.prototype._isFrameBefore =  function () {
  return this.noOfFrames[this.noOfFrames.length-3];
}

BowlingGame.prototype._isFirstFrame = function () {
  return this.noOfFrames.length <= 1;
}

BowlingGame.prototype._isFirstOrSecondFrame = function () {
  return this.noOfFrames.length <= 2;
}
