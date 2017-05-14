'use strict';

function Bowling () {
  this._frames = [];
  this._framecounter = (this.getFrames()) / 2;
}

Bowling.prototype.getFrames = function () {
  return this._frames;
};

Bowling.prototype.getFrameCounter = function () {
  return this._framecounter;
};
