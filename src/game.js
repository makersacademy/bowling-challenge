'use strict';

function Game(){
  this.frameStatus     = 'start frame';
  this.pinsStanding    = 10;
  this.pinsKnockedDown =  0;
  this.playerScore     =  0;
  this.playerBonus     =  0;
  this.framesLeft      = 10;
  this.currentFrame    =  0;
  this.rollsLeft       =  0;
}

Game.prototype.getCurrentPinsStanding = function () {
  return this.pinsStanding;
};

Game.prototype.getCurrentpinsKnockedDown = function () {
  return this.pinsKnockedDown;
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
  if (this.getCurrentRollsLeft() === 2) {
    this.knockDownPins();
    this._deductRollsLeft();
    this._updateScore();
    this._updatePinsStanding();
  }
  else if (this.getCurrentRollsLeft() === 1) {
    this.knockDownPins();
    this._deductRollsLeft();
    this._updateScore();
    this._resetFrameStatus();
    this._updatePinsStanding();
  }
  else {
    return 'no balls available, start next frame';
  }
};

Game.prototype.knockDownPins = function () {
  this.pinsKnockedDown = this._randomNumber();
};

Game.prototype._updateScore = function () {
  this.playerScore += this.pinsKnockedDown
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
  this.frameStatus = 'start frame'
};

Game.prototype._updatePinsStanding = function () {
  this.pinsStanding -= this.pinsKnockedDown
};

Game.prototype._randomNumber = function () {
  return Math.floor(Math.random() * this.pinsStanding);
};
// function _randomNumber() {
//   return Math.floor(Math.random() * 11);
// }
