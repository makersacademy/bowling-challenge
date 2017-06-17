'use strict';

function Frame() {

  this.MAX_PINS = 10;
  this.MAX_FRAME_SCORE = 30;
  this.frame = [];
}

Frame.prototype.getFrameSize = function () {
  return this.frame.length;
};

Frame.prototype.addBall = function (ball) {
  this.frame.push(ball);
};

Frame.prototype.getFrameTotalScore = function (nextFrame, nextOneMoreFrame) {
  return ( this._getFramePartialScore() + this._getBonus(nextFrame, nextOneMoreFrame) );
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

Frame.prototype._getBonus = function (nextFrame, nextOneMoreFrame) {
  if (nextFrame === undefined) {
    return 0;
  }
  if (this.isStrike()) {
    return nextFrame._getStrikeBonus(nextOneMoreFrame);
  }
  if (this.isSpare()) {
    return nextFrame._getSpareBonus();
  }
  return 0;
};

Frame.prototype._getSpareBonus = function () {
  return this._firstThrow();
};

Frame.prototype._getStrikeBonus = function (nextFrame) {
  if (this.isStrike() && nextFrame !== undefined) {
   return (this._getFramePartialScore() + nextFrame._firstThrow());
  }
  return this._getFramePartialScore();
};

Frame.prototype._firstThrow = function () {
  return this.frame[0].getThrow();
};
