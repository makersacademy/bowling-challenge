"use strict";

function Frame () {
  this._frame = [];
  this._strikes = [];
  this._spares = [];
}

Frame.prototype.getFrame = function () {
  return this._frame;
};

Frame.prototype.getFrameFinal = function (firstRoll = this._randomRoll(), secondRoll = this._randomRoll()) {
  var rollOne = this.finalFrame(firstRoll, secondRoll)[0];
  var rollTwo = this.finalFrame(firstRoll, secondRoll)[1];
  this.rollOneFrame(rollOne, rollTwo);
};

Frame.prototype.getFrameScore = function () {
  return this._frame[0] + this._frame[1];
};

Frame.prototype.randomRollOneFrame = function () {
  var rollFirst = this._randomRoll();
  var rollSecond = Math.min(this._randomRoll(), 10 - rollFirst);
  this._frame = [rollFirst, rollSecond];
};

Frame.prototype.rollOneFrame = function (rollFirst, rollSecond) {
  this._frame = [rollFirst, rollSecond];
};

Frame.prototype.isStrike = function () {
  return this._frame[0] === 10;
};

Frame.prototype.isSpare = function () {
  return this._frame[0]+this._frame[1] === 10;
};

Frame.prototype.finalFrame = function(firstRoll, secondRoll) {
  if (this.isStrike()) {
    return [firstRoll, secondRoll];
  }
  else if (this.isSpare()) {
    return [firstRoll, 0];
  }
  return [0,0];
};

Frame.prototype._randomRoll = function () {
  return Math.floor(Math.random() * 10);
};
