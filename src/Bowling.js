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

Bowling.prototype.bowl = function (number) {
  var pins = this.randomNumberOfPins();
  return number || pins;
};

Bowling.prototype.randomNumberOfPins = function () {
  return Math.floor( Math.random () * ( 10 - 1 + 1)) + 1;
};
