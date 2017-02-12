"use strict";

function Game() {
  this.framesInPlay = [];
  this.totalScore = 0;
}

Game.prototype = {

  bowl: function(knockedPins) {
    if (this.framesInPlay.length === 0) {
      this._playNewFrame(knockedPins);
    } else if (this._isTenthFrame() &&
               this._currentFrame().bowlNumber === 3 &&
              (this._currentFrame().isStrike || this._currentFrame().isSpare)) {
        this._playBonusFrame(knockedPins);
    } else if (this._isTenthFrame() && this._currentFrame().isfinished) {
        this._isGameOver();
    } else if (this._isTenthFrame()) {
        this._playTenthFrame(knockedPins);
    } else if (this._currentFrame().bowlNumber === 1) {
        this._playSecondBowl(knockedPins);
    } else {
        this._isGameOver();
        this._playNewFrame(knockedPins);
    }
  },

  resetGame: function() {
    this.framesInPlay = [];
  },

  checkFinalScore: function() {
    this._addFramesOneToNine();
    this._addTenthAndEleventhFrameOn();
    return this._totalScoreMessage();
  },

  _totalScoreMessage: function() {
    if (this.totalScore === 300) {
      return "You scored 300, a perfect game!"
    } else if (this.totalScore === 0) {
      return "Your final score is 0 - Gutter game!"
    } else {
      return "Your final score is " + this.totalScore
    }
  },

  _addTenthAndEleventhFrameOn: function() {
    if (this._isEleventhFrame()) {
      this.totalScore += (this._tenthFrameTotalScore() + this._bonusFrameTotalScore());
    } else {
      this.totalScore += this._tenthFrameTotalScore();
    }
  },

  _addFramesOneToNine: function() {
    for (var index = 0; index < 9; index ++) {
      var isStrikeThenStrike = this.framesInPlay[index].isStrike &&
                               this.framesInPlay[index+1].isStrike;
      var isStrikeThenSpare = this.framesInPlay[index].isStrike &&
                              this.framesInPlay[index+1].isSpare;
      var isSpare = this.framesInPlay[index].isSpare;

      if (isStrikeThenStrike) {
        this.totalScore += this.framesInPlay[index].bowlOne +
                 this.framesInPlay[index+1].bowlOne +
                 this.framesInPlay[index+2].bowlOne;
      } else if (isStrikeThenSpare) {
        this.totalScore += this.framesInPlay[index].bowlOne +
                 this.framesInPlay[index+1].bowlOne;
      } else if (isSpare) {
        this.totalScore += this.framesInPlay[index].bowlOne +
                 this.framesInPlay[index].bowlTwo +
                 this.framesInPlay[index+1].bowlOne;
      } else {
        this.totalScore += this.framesInPlay[index].bowlOne +
                 this.framesInPlay[index].bowlTwo;
      }
    }
  },

  _currentFrame: function() {
    return this.framesInPlay.slice(-1)[0]
  },

  _isTenthFrame: function() {
    return this.framesInPlay.length === 10
  },

  _isEleventhFrame: function() {
    return this.framesInPlay.length === 11
  },

  _playTenthFrame: function(knockedPins) {
    var frame = this._currentFrame();
    return frame.tenthFrame(knockedPins);
  },

  _isGameOver: function() {
    if (this._isEleventhFrame() || this._isTenthFrame()) {
      throw TypeError("Your game is over, please reset if you would like to play again.")
    }
  },

  _currentFrameTotal: function() {
    return this._currenFrame().bowlOne + this._currentFrame().bowlTwo;
  },


  _tenthFrameTotalScore: function() {
    return this.framesInPlay[9].bowlOne + this.framesInPlay[9].bowlTwo;
  },

  _bonusFrameTotalScore: function() {
    return this.framesInPlay[10].bowlOne;
  },

  _playNewFrame: function(knockedPins) {
    var frame = new Frame(knockedPins);
    this.framesInPlay.push(frame);
    frame.bowlNumber += 1;
    frame.checkStrike(knockedPins);
  },

  _playBonusFrame: function(knockedPins) {
    var bonusFrame = new Frame(knockedPins);
    this.framesInPlay.push(bonusFrame);
    bonusFrame.bowlOne = knockedPins;
    return "Game Over";
  },

  _playSecondBowl: function(knockedPins) {
    var frame = this._currentFrame();
    frame.bowlNumber += 1;
    frame.bowlTwo = knockedPins;
    frame.checkSpare(knockedPins);
  },

};
