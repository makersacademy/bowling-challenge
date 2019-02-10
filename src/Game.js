'use strict'

function Game () {
  this.frameNumber = 0
  this._score = 0
  this.frame = []
  this.rolls = []
};


Game.prototype.getTotalScore = function () {
    var total
    total = this.rolls.reduce((acc, val) => {
    return acc + val;
  });
  return this._score += total
};

Game.prototype.getCurrentFrame = function () {
  return this.frame
}

Game.prototype.newFrame = function () {
  this.frame = []
  this.frameNumber += 1
};

Game.prototype.roll = function (pins) {
if(this.frame.length === 2 && this.frameNumber < 10) {
  throw new Error('You have already rolled twice, please start a new frame.');
} else if (this.frame.length === 3 && this.frameNumber === 10) {
  throw new Error('You can only roll three times on the last frame');
}
  this.frame.push(pins)
  this.rolls.push(pins)
  // this._score += pins
};
