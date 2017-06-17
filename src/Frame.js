'use strict';

function Frame() {

  this.MAX_PINS = 10;
  this.frame = [];
}

Frame.prototype.getFrameSize = function () {
  return this.frame.length;
};

Frame.prototype.addBall = function (ball) {
  this.frame.push(ball);
};

Frame.prototype.getFrameTotalScore = function (nextFrame) {
  return (this._getFramePartialScore() + nextFrame._getSpareBonus());
};

Frame.prototype.isStrike = function () {
  return this._firstThrow() === this.MAX_PINS;
};

Frame.prototype.isSpare = function () {
  return (this._firstThrow() + this.frame[1].getThrow()) === this.MAX_PINS;
};

Frame.prototype._getFramePartialScore = function () {
  return this.frame.reduce(function (score, ball) {
    return (score + ball.getThrow());
  }, 0);
};

Frame.prototype._getSpareBonus = function () {
  return this._firstThrow();
};

Frame.prototype._firstThrow = function () {
  return this.frame[0].getThrow();
};
