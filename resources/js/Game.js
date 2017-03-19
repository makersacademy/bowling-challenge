'use strict';

function Game()
{
  this.currentScore = 0;
  this.totalScore = []
  this.currentFrame = null
  this.bonusStrikeMode = false
  this.bonusSpareMode = false
};

Game.prototype.addScoretoFrame = function(score1, score2 = 0) {
  this.currentFrame = new Frame(score1,score2);
};

Game.prototype.saveCurrentFrame = function(frame = this.currentFrame) {
  this.totalScore.push(frame);
};

Game.prototype.calculateCurrentScoreFirstFrame = function() {
  this.currentScore += this.totalScore[this._currentFrameID()].score1 + this.totalScore[this._currentFrameID()].score2
  if (this.totalScore[this._currentFrameID()].isStrike === true) {
    this.bonusStrikeMode = true
  }
  if (this.totalScore[this._currentFrameID()].isSpare === true) {
    this.bonusSpareMode = true
  }
};

Game.prototype.calculateCurrentScore = function() {
  if (this.bonusStrikeMode === false && this.bonusSpareMode === false) {
    this.currentScore += this.totalScore[this._currentFrameID()].score1 + this.totalScore[this._currentFrameID()].score2
  } else if (this.bonusStrikeMode === true) {
    this.currentScore += (this.totalScore[this._currentFrameID()].score1 + this.totalScore[this._currentFrameID()].score2) * 2
    if (this.totalScore[this._currentFrameID()].isStrike === false) {
      this.bonusStrikeMode = false
    }
  } else if (this.bonusSpareMode === true) {
    this.currentScore += (this.totalScore[this._currentFrameID()].score1) * 2  + (this.totalScore[this._currentFrameID()].score2)
    if (this.totalScore[this._currentFrameID()].isSpare === false) {
      this.bonusStrikeMode = false
    }
  }
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
