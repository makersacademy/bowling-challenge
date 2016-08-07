'use strict';

function Game(){
  this.pinsStanding = 10;
  this.playerScore = 0;
  this.playerBonus = 0;
  this.framesLeft = 10;
  this.currentFrame = 0;
  this.frameStatus = 'ready to play';
  this.rollsLeft = 0;
}

Game.prototype.getCurrentPinsStanding = function () {
  return this.pinsStanding;
};

Game.prototype.getCurrentPlayerScore = function () {
  return this.playerScore;
};

Game.prototype.getCurrentBonus = function () {
  return this.playerBonus;
};

Game.prototype.getCurrentFramesLeft = function () {
 return this.framesLeft;
};

Game.prototype.getCurrentFrame = function () {
  return this.currentFrame;
};

Game.prototype.getCurrentFrameStatus = function () {
  return this.frameStatus;
};

Game.prototype.getCurrentRollsLeft = function () {
  return this.rollsLeft;
};

Game.prototype.startFrame = function () {
  if (this.getCurrentFrameStatus() === 'unavailable') {
    return 'cannot start frame: already playing a frame or game is finished';
  }
  this._updateCurrentFrame();
  this._deductFramesLeft();
  this._resetRollsLeft();
  this.frameStatus = 'unavailable';
};

Game.prototype.rollBall = function () {
  if (this.getCurrentRollsLeft() === 0) {
    return 'no balls available, start next frame';
  }

  if (this.getCurrentRollsLeft() === 1) {
    this._deductRollsLeft();
    this._resetFrameStatus();
  }
  this._deductRollsLeft();
};

Game.prototype._updateCurrentFrame = function () {
  this.currentFrame += 1;
};

Game.prototype._deductRollsLeft = function () {
  this.rollsLeft -= 1;
};

Game.prototype._deductFramesLeft = function () {
  this.framesLeft -= 1;
};

Game.prototype._resetRollsLeft = function () {
  this.rollsLeft = 2
};

Game.prototype._resetFrameStatus = function () {
  this.frameStatus = 'ready to play'
};

function _randomNumber() {
  return Math.floor(Math.random() * 11);
}
