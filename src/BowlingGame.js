"use strict";

function BowlingGame() {
  this.framesInPlay = [];
  this.totalScore = 0;
}

BowlingGame.prototype.roll = function(knockedPins) {
  if (this.framesInPlay.length === 0) {
    this._playNewFrame(knockedPins);
  } else if (this._isTenthFrame() &&
             this._currentFrame().rollNumber === 3 &&
            (this._currentFrame().isStrike || this._currentFrame().isSpare)) {
      this._playBonusFrame(knockedPins);
  } else if (this._isTenthFrame() && this._currentFrame().isfinished) {
      this._isGameFinished();
  } else if (this._isTenthFrame()) {
      this._playTenthFrame(knockedPins);
  } else if (this._currentFrame().rollNumber === 1) {
      this._playSecondRoll(knockedPins);
  } else {
      this._isGameFinished();
      this._playNewFrame(knockedPins);
  }
};

BowlingGame.prototype.resetGame = function() {
  this.framesInPlay = [];
};

BowlingGame.prototype.checkFinalScore = function() {
  this._addFramesOneToNine();
  this._addTenthAndEleventhFrameOn();
  return this._totalScoreMessage();
};

BowlingGame.prototype._totalScoreMessage = function() {
  if (this.totalScore === 300) {
    return "Your final total score is 300! You played the perfect game!"
  } else if (this.totalScore === 0) {
    return "Your final total score is 0 - Gutter game!"
  } else {
    return "Your final total score is " + this.totalScore
  }
};

BowlingGame.prototype._addTenthAndEleventhFrameOn = function() {
  if (this._isEleventhFrame()) {
    this.totalScore += (this._tenthFrameTotalScore() + this._bonusFrameTotalScore());
  } else {
    this.totalScore += this._tenthFrameTotalScore();
  }
};

BowlingGame.prototype._addFramesOneToNine = function() {
  for (var index = 0; index < 9; index++) {
    var isStrikeThenStrike = this.framesInPlay[index].isStrike &&
                             this.framesInPlay[index+1].isStrike;
    var isStrikeThenSpare = this.framesInPlay[index].isStrike &&
                            this.framesInPlay[index+1].isSpare;
    var isSpare = this.framesInPlay[index].isSpare;

    if (isStrikeThenStrike) {
      this.totalScore += this.framesInPlay[index].rollOne +
               this.framesInPlay[index+1].rollOne +
               this.framesInPlay[index+2].rollOne;
    } else if (isStrikeThenSpare) {
      this.totalScore += this.framesInPlay[index].rollOne +
               this.framesInPlay[index+1].rollOne;
    } else if (isSpare) {
      this.totalScore += this.framesInPlay[index].rollOne +
               this.framesInPlay[index].rollTwo +
               this.framesInPlay[index+1].rollOne;
    } else {
      this.totalScore += this.framesInPlay[index].rollOne +
               this.framesInPlay[index].rollTwo;
    }
  }
};

BowlingGame.prototype._currentFrame = function() {
  return this.framesInPlay.slice(-1)[0]
};

BowlingGame.prototype._isTenthFrame = function() {
  return this.framesInPlay.length === 10
};

BowlingGame.prototype._isEleventhFrame = function() {
  return this.framesInPlay.length === 11
};

BowlingGame.prototype._playTenthFrame = function(knockedPins) {
  var frame = this._currentFrame();
  return frame.tenthFrame(knockedPins);
};

BowlingGame.prototype._isGameFinished = function() {
  if (this._isEleventhFrame() || this._isTenthFrame()) {
    throw TypeError("Your game has finished, please reset if you would like to play again.")
  }
};

BowlingGame.prototype._currentFrameTotal = function() {
  return this._currentFrame().rollOne + this._currentFrame().rollTwo;
};


BowlingGame.prototype._tenthFrameTotalScore = function() {
  return this.framesInPlay[9].rollOne + this.framesInPlay[9].rollTwo;
};

BowlingGame.prototype._bonusFrameTotalScore = function() {
  return this.framesInPlay[10].rollOne;
};

BowlingGame.prototype._playNewFrame = function(knockedPins) {
  var frame = new Frame(knockedPins);
  this.framesInPlay.push(frame);
  frame.rollNumber += 1;
  frame.checkStrike(knockedPins);
};

BowlingGame.prototype._playBonusFrame = function(knockedPins) {
  var bonusFrame = new Frame(knockedPins);
  this.framesInPlay.push(bonusFrame);
  bonusFrame.rollOne = knockedPins;
  return "Game has ended";
};

BowlingGame.prototype._playSecondRoll = function(knockedPins) {
  var frame = this._currentFrame();
  frame.rollNumber += 1;
  frame.rollTwo = knockedPins;
  frame.checkSpare(knockedPins);
};
