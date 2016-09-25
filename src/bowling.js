'use strict';

function Bowling(name) {
  this._game = [];
  this.playerName = name;
  this.score = 0;
  this.frameNumber = 0;
  this._currentFrame;
  this._GAME_ENDED_ERROR = "Game over. No more frame left."
}

Bowling.prototype = {
  roll: function() {
    if (this.noMoreFramesToPlay()) { throw Error(this._GAME_ENDED_ERROR); }
    if (this._isNewFrameNeeded()) { this._createNewFrame() };
    this._executeRoll();
  },
  _calculateAndAddBonusScore: function() {
    if (this._currentFrame.isSecondRoll()) { this._calculateSpareBonusScore() }
    if (!this._currentFrame.isBonunsRollInLastFrame()) { this._calculateStrikeBonusScore() };
  },
  _calculateStrikeBonusScore: function() {
    if (this._isStrikeBonusAvailable()) {
      var bonusScore = this._game[this._game.length - 1] + this._game[this._game.length - 2];
      this.score += bonusScore;
    }
  },
  _calculateSpareBonusScore: function() {
    if (this._isSpareBonusAvailable()) {
      var bonusScore = this._game[this._game.length - 1];
      this.score += bonusScore;
    }
  },
  noMoreFramesToPlay: function() {
    return (this.frameNumber === 10 && this._currentFrame.isFrameOver());
  },
  _isStrikeBonusAvailable: function() {
    return this._game.length > 2 && (this._game[this._game.length - 3] === 10);
  },
  _isSpareBonusAvailable: function() {
    return this._game.length > 2 && this._isStrikeIncludedInLastTwoRolls() && this._isLastFrameASpare();
  },
  _isLastFrameASpare: function() {
    return (this._game[this._game.length - 2] + this._game[this._game.length - 3]) === 10;
  },
  _isStrikeIncludedInLastTwoRolls: function() {
    return (this._game[this._game.length - 2] !== 10) && (this._game[this._game.length - 3] !== 10)
  },
  _isNewFrameNeeded: function() {
    return this._currentFrame === undefined || this._currentFrame.isFrameOver()
  },
  _executeRoll: function() {
    this._game.push(this._currentFrame.roll());
    this.score += this._game[this._game.length - 1];
    this._calculateAndAddBonusScore();
  },
  _createNewFrame: function() {
    this.frameNumber++;
    this._currentFrame = new Frame(this.frameNumber);
  }
};
