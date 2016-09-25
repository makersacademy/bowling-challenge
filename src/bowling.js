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
    if(this.noMoreFramesToPlay()) { throw Error(this._GAME_ENDED_ERROR); }
    if (this.isNewFrameNeeded()) {
      this.frameNumber++;
      this._currentFrame = new Frame(this.frameNumber);
    }
    this._executeRoll();
  },
  calculateAndAddBonusScore: function() {
    if (this.isFirstRoll()) {
      this.calculateSpareBonusScore();
      this.calculateStrikeBonusScore();
    } else if (this.isSecondRoll()) {
      this.calculateStrikeBonusScore();
    }
  },
  calculateStrikeBonusScore: function() {
    if (this.isStrikeBonusAvailable()) {
      var bonusScore = this._game[this._game.length - 1] + this._game[this._game.length - 2];
      this.score += bonusScore;
    }
  },
  calculateSpareBonusScore: function() {
    if (this.isSpareBonusAvailable()) {
      var bonusScore = this._game[this._game.length - 1];
      this.score += bonusScore;
    }
  },
  noMoreFramesToPlay: function() {
    return (this.frameNumber === 10 && this._currentFrame.isFrameOver());
  },
  isFirstRoll: function() {
    return this._currentFrame.frameContent.length === 1;
  },
  isSecondRoll: function() {
    return this._currentFrame.frameContent.length === 2;
  },
  isStrikeBonusAvailable: function() {
    return this._game.length > 2 && (this._game[this._game.length - 3] === 10);
  },
  isSpareBonusAvailable: function() {
    return this._game.length > 2 && this.isStrikeIncludedInLastTwoRolls() && this.isLastFrameASpare();
  },
  isLastFrameASpare: function() {
    return (this._game[this._game.length - 2] + this._game[this._game.length - 3]) === 10;
  },
  isStrikeIncludedInLastTwoRolls: function() {
    return (this._game[this._game.length - 2] !== 10) && (this._game[this._game.length - 3] !== 10)
  },
  isNewFrameNeeded: function() {
    return this._currentFrame === undefined || this._currentFrame.isFrameOver()
  },
  _executeRoll: function() {
    this._game.push(this._currentFrame.roll());
    this.score += this._game[this._game.length - 1];
    this.calculateAndAddBonusScore();
  }
};
