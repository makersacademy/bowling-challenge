'use strict';

function BowlingGame() {
  this.framesInPlay = [];
  this.totalScore = 0;
}

BowlingGame.prototype.roll = function(knockedPins) {
  if (this.framesInPlay.length === 0) {
      var frame = new Frame(knockedPins);
      this.framesInPlay.push(frame);
      frame.rollNumber += 1;
      frame.checkStrike(knockedPins);
  } else if (this._isTenthFrame() && this._currentFrame().rollNumber === 3 && (this._currentFrame().isStrike || this.currentFrame().isSpare)) {
      var bonusFrame = new Frame(knockedPins);
      this.framesInPlay.push(bonusFrame);
      bonusFrame.rollOne = knockedPins;
  } else if (this._isTenthFrame()) {
      var frame = this._currentFrame();
      return frame.tenthFrame(knockedPins);
  } else if (this._currentFrame().rollNumber === 1) {
      var frame = this._currentFrame();
      frame.rollNumber += 1;
      frame.rollTwo = knockedPins;
      frame.checkSpare(knockedPins);
  } else {
      this._isGameFinished()
      var frame = new Frame(knockedPins);
      this.framesInPlay.push(frame);
      frame.rollNumber += 1;
      frame.checkStrike(knockedPins);
  };
};

BowlingGame.prototype._currentFrame = function() {
  return this.framesInPlay.slice(-1)[0]
};

BowlingGame.prototype._isNextFrameTen = function() {
  return this.framesInPlay.length === 9 && this.framesInPlay.slice(-1)[0].rollNumber === 2
};

BowlingGame.prototype._isTenthFrame = function() {
  return this.framesInPlay.length === 10
};

BowlingGame.prototype._isGameFinished = function() {
  if (this.framesInPlay.length === 11) {
    throw TypeError("Your game has finished, please reset if you would like to play again.")
  }
};

BowlingGame.prototype.resetGame = function() {
  this.framesInPlay = [];
};

BowlingGame.prototype.checkFinalScore = function() {
  var total = 0;
  for (var index = 0; index < 9; index++) {
    if (this.framesInPlay[index].isStrike && this.framesInPlay[index+1].isStrike) {
      total += this.framesInPlay[index].rollOne + this.framesInPlay[index+1].rollOne + this.framesInPlay[index+2].rollOne;
    } else if (this.framesInPlay[index].isStrike && this.framesInPlay[index+1].isSpare) {
      total += this.framesInPlay[index].rollOne + this.framesInPlay[index+1].rollOne;
    } else if (this.framesInPlay[index].isSpare) {
      total += this.framesInPlay[index].rollOne + this.framesInPlay[index].rollTwo + this.framesInPlay[index+1].rollOne;
    } else {
      total += this.framesInPlay[index].rollOne + this.framesInPlay[index].rollTwo;
    }
  }
    if (this.framesInPlay.length === 11) {
      total += (this._tenthFrameTotalScore() + this._bonusFrameTotalScore());
    } else {
      total += this._tenthFrameTotalScore();
    }

    if (total === 300) {
      return "Your final total score is 300! You played the perfect game!"
    } else if (total === 0) {
      return "Your final total score is 0 - Gutter game!"
    } else {
      return "Your final total score is " + total
    }
};

BowlingGame.prototype._tenthFrameTotalScore = function() {
  return this.framesInPlay[9].rollOne + this.framesInPlay[9].rollTwo;
};

BowlingGame.prototype._bonusFrameTotalScore = function() {
  return this.framesInPlay[10].rollOne;
};
