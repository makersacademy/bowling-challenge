'use strict';

function Game(){
  this.pins = 10;
  this.playerScore = 0;
  this.bonus = 0;
  this.framesLeft = 10;
  this.currentFrame = 0;
  this.frameStatus = 'ready to play';
}

Game.prototype.getCurrentPinsStanding = function () {
  return this.pins;
};

Game.prototype.getCurrentPlayerScore = function () {
  return this.playerScore;
};

Game.prototype.getCurrentBonus = function () {
  return this.bonus
};

Game.prototype.getCurrentFramesLeft = function () {
 return this.framesLeft
};

Game.prototype.getCurrentFrame = function () {
  return this.currentFrame
};

Game.prototype.isPlayingFrame = function () {
  return this.playingFrame
};

Game.prototype.getCurrentFrameStatus = function () {
  return this.frameStatus
};

Game.prototype.deductFrames = function () {
  this.framesLeft -=1;
};

Game.prototype.updateCurrentFrame = function () {
  this.currentFrame +=1;
};

Game.prototype.startFrame = function () {
  if (this.getCurrentFrameStatus() === 'ready to play') {
    this.updateCurrentFrame();
    this.deductFrames();
    this.frameStatus = 'unavailable';
  }
  return 'cannot start frame: you are already playing a frame or you have finished the game';
};
