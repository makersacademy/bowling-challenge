'use strict';

function Game()
{
  this.currentScore = 0;
  this.totalScore = []
  this.currentFrame = null
  this.isBonusStrikeMode = false
  this.isBonusSpareMode = false
};

Game.prototype.addScoretoFrame = function(score1, score2 = 0) {
  this.currentFrame = new Frame(score1,score2);
};

Game.prototype.saveCurrentFrame = function(frame = this.currentFrame) {
  this.totalScore.push(frame);
};

Game.prototype.calculateCurrentScoreFirstFrame = function() {
  this._addScore1AndScore2();
  if (this.totalScore[this._currentFrameID()].isStrike === true) {
    this._setBonusStrikeModeOn();
  }
  if (this.totalScore[this._currentFrameID()].isSpare === true) {
    this._setBonusSpareModeOn();
  }
};

Game.prototype.calculateCurrentScore = function() {
  if (this.isBonusStrikeMode === false && this.isBonusSpareMode === false) {
    this._addScore1AndScore2();
  } else if (this.isBonusStrikeMode === true) {
    this._addStrikeScore();
    if (this.totalScore[this._currentFrameID()].isStrike === false) {
      this._setBonusStrikeModeOff();
    }
  } else if (this.isBonusSpareMode === true) {
    this._addSpareScore();
    if (this.totalScore[this._currentFrameID()].isSpare === false) {
      this._setBonusSpareModeOff();
    }
  }
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
