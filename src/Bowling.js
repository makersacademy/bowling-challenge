'use strict';

function Bowling () {
  this._frames = [];
  this._frameCounter = this.calculateFrameCount();
}
Bowling.prototype.getFrames = function () {
  return this._frames;
};
Bowling.prototype.setFrames = function (value) {
  return ( this._frames.push(value) );
};
Bowling.prototype.getFrameCounter = function () {
  return this._frameCounter;
};
Bowling.prototype.calculateFrameCount = function () {
  var numberOfBowls = this._frames.length;
  var frameCount = this._frameCounter = ( numberOfBowls / 2 );
  return frameCount;
};
Bowling.prototype.bowl = function (number) {
  var pins =  number || this.randomNumberOfPins();
  this.setFrames(pins);
  this.calculateFrameCount();
  return pins;
};
Bowling.prototype.randomNumberOfPins = function () {
  return Math.floor( Math.random () * ( 10 - 1 + 1)) + 1;
};
