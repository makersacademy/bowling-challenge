'use strict'

function Game () {
  this.MAXIMUM_PINS = 10
  this.frameNumber = 1
  this._score = 0
  this.frame = []
  this.rolls = []
  this.frameLog = []
  this.frameScore = []
};


Game.prototype.getTotalScore = function () {
  return this._score
}

Game.prototype.getCurrentFrame = function () {
  return this.frame
}

Game.prototype.newFrame = function () {
  this.frame = []
  return this.frameNumber += 1
};

Game.prototype.endFrame = function () {
  this.frameLog.push(this.frame)
  var total
  total = this.frame.reduce((acc, val) => {
    return acc + val;
  });
  this.frameScore.push(total)
};

Game.prototype.roll = function (pins) {
  if(pins > this.MAXIMUM_PINS) {
    throw new Error ('You can only knock 10 pins in a roll.')
  }
  if(this.frame.length === 2 && this.frameNumber < 10) {
    throw new Error('You have already rolled twice, please start a new frame.');
  } else if (this.frame.length === 3 && this.frameNumber === 10) {
    throw new Error('You can only roll three times on the last frame');
  }
  this.frame.push(pins)
  this.rolls.push(pins)
  this._score += pins
};

Game.prototype.isStrike = function () {
  if(this.frame[0] === 10){
    return true
  }
  return false
};

Game.prototype.isSpare = function () {
  if(this.frame[0] + this.frame[1] === 10){
    return true
  }
  return false
};
