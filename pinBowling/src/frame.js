function Frame (firstFrame) {
  'use strict';
  this._firstFrame = firstFrame || 1;
  this._frame = this._firstFrame;
}

Frame.prototype.giveFrame = function () {
  return this._frame;
};

Frame.prototype.switchFrame = function () {
  this._frame++;
};
