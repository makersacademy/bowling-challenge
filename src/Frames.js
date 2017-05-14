'use strict';

function Frames () {
  this.STRIKE = 10;
  this._frames = [];
  this._currentFrame = [];
  this._frameCounter = 1;
  this._bonusPoints = 0;
  this._bonusCounter = 0;
  this._isStrike = false;
  this._isSpare = true;
}
Frames.prototype.setIsStrike = function (value) {
  this._isStrike = value;
};
Frames.prototype.setIsSpare = function (value) {
  this._isSpare = value;
};
Frames.prototype.setFrames = function (value) {
  this._frames.push(value);
};
Frames.prototype.setBonusCounter = function (value) {
  this._bonusCounter += value;
};
Frames.prototype.setBonusPoints = function (value) {
  this._bonusPoints += value;
};
Frames.prototype.resetCurrentFrame = function (value) {
  this._currentFrame = value;
};
Frames.prototype.calculateFrameCount = function () {
  var numberOfBowls = this._frames.length;
  var frameCount = this._frameCounter = ( numberOfBowls / 2 );
  return frameCount;
};
Frames.prototype.applyBonus = function (pins) {
  this.setBonusPoints(pins);
  this.setBonusCounter(-1);
};
Frames.prototype.spareChecker = function (pins) {
  if (this._currentFrame.length === 1) {
    this.setIsSpare(false);
  } else if ((this._currentFrame.length === 2) &&
    (this._currentFrame[0] + this._currentFrame[1] !== this.STRIKE)) {
    this.setIsSpare(false);
    this.resetCurrentFrame([]);
  } else {
    this.spare();
  }
};
Frames.prototype.strike = function () {
  console.log('Strike! X');
  this.setIsStrike(true);
  this.setBonusCounter(2);
  this.setFrames(this.STRIKE);
  this.setFrames(0);
  this.calculateFrameCount();
};
Frames.prototype.spare = function () {
  console.log('Spare! /');
  this.setIsSpare(true);
  this.setBonusCounter(1);
  this.resetCurrentFrame([]);
};
