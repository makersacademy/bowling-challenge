function Frame (firstFrame, initialRound) {
  'use strict';
  this._firstFrame = firstFrame || 1;
  this._initialRound = initialRound || 1;
  this._frame = this._firstFrame;
  this._round = this._initialRound;
}

Frame.prototype.giveFrame = function () {
  return this._frame;
};

Frame.prototype.upFrame = function () {
  this._frame++;
  this._round = this._initialRound;
};

Frame.prototype.giveRound = function () {
  return this._round;
};

Frame.prototype.upRound = function () {
  this._round++;
  if (this._round > (this._initialRound + 1)) {this.upFrame();}
};
