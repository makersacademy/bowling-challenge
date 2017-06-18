'use strict';

var LastFrame = function () {
  this._scores = [0,0,0];
  this._frameScore = 0;
  this.roll = new Roll()
};

LastFrame.prototype.firstRoll = function(pins) {
  this._scores[0] = this.roll.makeRoll(pins);
  return this._scores[0];
};

LastFrame.prototype.secondRoll = function(pins) {
  if (this._scores[0] === 10) {
    var limit = 10;
  } else {
    var limit = 10 - this._scores[0];
  }
  if (pins > limit) {
    throw new Error("Can not knock down that many pins")
  } else {
    this._scores[1] = this.roll.makeRoll(pins);
  }
  return this._scores[1];
};

LastFrame.prototype.thirdRoll = function(pins) {
  if (this._scores[0] === 10) {
    var limit = 10;
  } else if (this._scores[0] != 10 && this._scores[0] + this._scores[1] === 10){
    var limit = 10;
  } else {
    var limit = 0;
  }
  if (pins > limit) {
    throw new Error("You can't make a third roll in this frame")
  } else {
    this._scores[2] = this.roll.makeRoll(pins);
  }
  return this._scores[2];
};

LastFrame.prototype.frameScore = function() {
  this._frameScore = this._scores.reduce(function(a, b) { return a + b; }, 0);
  return this._frameScore
}
