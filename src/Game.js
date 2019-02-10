'use strict'

function Game () {
  this.frameNumber = 0
  this._score = 0
  this.frame = []
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
  this.frame.push(pins)
  this._score += pins
};
