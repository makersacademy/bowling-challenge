'use strict';

function Game()
{
  this.currentScore = 0;
  this.totalScore = [];
  this.currentFrame = null;
  this.isBonusStrikeMode = false;
  this.isBonusSpareMode = false;
};

Game.prototype.addScoretoFrame = function(score1, score2 = 0) {
  this.currentFrame = new Frame(score1,score2);
};

Game.prototype.saveCurrentFrame = function(frame = this.currentFrame) {
  this.totalScore.push(frame);
};

Game.prototype.calculateCurrentScoreFirstFrame = function() {
  this._addScore1AndScore2();
  if (this._isRollAStrike) {
    this._setBonusStrikeModeOn();
  }
  if (this._isRollASpare) {
    this._setBonusSpareModeOn();
  }
};

Game.prototype.calculateCurrentScore = function() {
  if (this._isBothBonusModesOff()) {
    this._addScore1AndScore2();
  } else if (this._isBonusStrikeModeOn()) {
    this._addStrikeScore();
    if (this._isCurrentFrameNotAStrike()) {
      this._setBonusStrikeModeOff();
    }
  } else if (this._isBonusSpareModeOn()) {
    this._addSpareScore();
    if (this._isCurrentFrameNotASpare()) {
      this._setBonusSpareModeOff();
    }
  }
};

Game.prototype._isCurrentFrameNotASpare = function () {
  this.totalScore[this._currentFrameID()].isSpare === false;
};

Game.prototype._isCurrentFrameNotAStrike = function () {
  this.totalScore[this._currentFrameID()].isStrike === false;
};

Game.prototype._isBonusSpareModeOn = function () {
  this.isBonusSpareMode === true;
};

Game.prototype._isBonusStrikeModeOn = function () {
  this.isBonusStrikeMode === true;
};

Game.prototype._isBothBonusModesOff = function() {
  this.isBonusStrikeMode === false && this.isBonusSpareMode === false;
};

Game.prototype._setBonusSpareModeOff = function() {
  this.isBonusSpareMode = false;
};

Game.prototype._setBonusStrikeModeOff = function() {
  this.isBonusStrikeMode = false;
};

Game.prototype._setBonusSpareModeOn = function() {
  this.isBonusSpareMode = true;
};

Game.prototype._setBonusStrikeModeOn = function() {
  this.isBonusStrikeMode = true;
};

Game.prototype._isRollASpare = function() {
  this.totalScore[this._currentFrameID()].isSpare === true;
};

Game.prototype._isRollAStrike = function() {
  this.totalScore[this._currentFrameID()].isStrike === true;
};

Game.prototype._addScore1AndScore2 = function() {
  this.currentScore += this.totalScore[this._currentFrameID()].score1 + this.totalScore[this._currentFrameID()].score2;
};

Game.prototype._addSpareScore = function() {
  this.currentScore += (this.totalScore[this._currentFrameID()].score1) * 2  + (this.totalScore[this._currentFrameID()].score2);
};

Game.prototype._addStrikeScore = function() {
  this.currentScore += (this.totalScore[this._currentFrameID()].score1 + this.totalScore[this._currentFrameID()].score2) * 2;
};

Game.prototype._currentFrameID = function(){
  return this.totalScore.length - 1;
};

Game.prototype._previousFrameID = function() {
  return this.totalScore.length - 2;
};

Game.prototype._nextFrameID = function() {
  return this.totalScore.length + 1;
};
