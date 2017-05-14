'use strict';

function Bowling () {
  this._frames = [];
}

Bowling.prototype.getFrames = function () {
  return this._frames;
};
