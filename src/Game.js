'use strict'

function Game () {
  this.frameNumber = 0
  this._score = 0
  this.frame = []
  this.rolls = []
};


Game.prototype.getTotalScore = function () {

  return this._score
};

Game.prototype.getCurrentFrame = function () {
  return this.frame
}

Game.prototype.newFrame = function () {
  this.frame = []
  this.frameNumber += 1
};

Game.prototype.roll = function (pins) {
if(this.frame.length >= 2 && this.frameNumber < 10){
  throw new Error('You can only roll twice within a frame');
  }
  this.frame.push(pins)
  this.rolls.push(pins)
  this._score += pins
};
