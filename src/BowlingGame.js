'use strict';

var BowlingGame = function () {
  this.LOWESTSCORE = 0;
  this.HIGHESTSCORE = 270;
  this.MAXFRAMES = 10;
  this.score = 0;
  this.noOfFrames = [];
}

BowlingGame.prototype.addFrame = function (frame) {
  if (this._addFrameLimit() === true) {
    return 'Game is over';
  } else if (this._framesLengthIs9() === true) {
    this._isFinalFrame(frame);
  }  else {
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
  if (this._lastTwoFramesWereStrikes() === true) {
    this.score += ((this._currentFrame().rollsTotal) * 2) + (this._currentFrame().roll1);
  } else if (this._lastFrameWasStrike() === true) {
    this.score += ((this._currentFrame().rollsTotal) * 2)
  } else if (this._lastFrameWasSpare() === true) {
    this.score += ((this._currentFrame().rollsTotal) + (this._currentFrame().roll1));
  } else {
    this.score += this._currentFrame().rollsTotal;
  }
}

BowlingGame.prototype._lastTwoFramesWereStrikes = function () {
  if (this._isFirstOrSecondFrame()) {
    return false;
  } else {
    return ((this._isLastFrame().roll1 === 10) && (this._isLastFrame().roll1 === 10));
  }
}

BowlingGame.prototype._lastFrameWasStrike = function () {
  if (this._isFirstFrame()){
    return false;
  } else {
    return (this._isLastFrame().roll1 === 10);
  }
}

BowlingGame.prototype._lastFrameWasSpare = function () {
  if (this._isFirstFrame()){
    return false;
  } else {
    return (this._isLastFrame().rollsTotal === 10 && this._isLastFrame().roll1 !== 10);
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

BowlingGame.prototype._framesLengthIs9 = function () {
  return this.noOfFrames.length === 9;
}

BowlingGame.prototype._isFinalFrame = function (frame) {
  this._incrementNoOfFrames(frame);
  this._incrementScore();
  if (this._currentFrame().roll1 === 10) {
    this.score += ((this._currentFrame().roll2) + (this._currentFrame().bonusRoll));
  } else if ((this._currentFrame().rollsTotal === 10) && (this._currentFrame().roll1 !== 10)) {
    this.score += (this._currentFrame().bonusRoll);
  }
}
