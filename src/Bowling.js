'use strict';

function Bowling () {
  this.FRAME_COUNT_LIMIT = 10;
  this.STRIKE = 10;
  this._frames = [];
  this._frameCounter = 1;
  this._bonusPoints = 0;
  this._bonusCounter = 0;
  this._isStrike = false;
  this._isSpare = true;
  this._spareArray = [];
}
Bowling.prototype.setFrames = function (value) {
  this._frames.push(value);
};
Bowling.prototype.getBonusCounter = function () {
  return this._bonusCounter;
};
Bowling.prototype.setBonusCounter = function (value) {
  this._bonusCounter += value;
};
Bowling.prototype.setBonusPoints = function (value) {
  this._bonusPoints += value;
};
Bowling.prototype.setIsStrike = function (value) {
  this._isStrike = value;
};
Bowling.prototype.setIsSpare = function (value) {
  this._isSpare = value;
};
Bowling.prototype.setSpareArray = function (value) {
  this._spareArray = value;
};
Bowling.prototype.calculateFrameCount = function () {
  var numberOfBowls = this._frames.length;
  var frameCount = this._frameCounter = ( numberOfBowls / 2 );
  return frameCount;
};
Bowling.prototype.randomNumberOfPins = function () {
  return Math.floor( Math.random () * ( 10 - 1 + 1)) + 1;
};
Bowling.prototype.spareChecker = function (pins) {
  this._spareArray.push(pins);
  if (this._spareArray.length === 1) {
    this.setIsSpare(false);
  } else if ((this._spareArray.length === 2) && (this._spareArray[0] + this._spareArray[1] !== 10)) {
    this.setIsSpare(false);
    this.setSpareArray([]);
  } else {
    this.setIsSpare(true);
    this.setBonusCounter(1);
    this.setSpareArray([]);
  }
};
Bowling.prototype.bowl = function (number) {
  if(this._frameCounter === this.FRAME_COUNT_LIMIT) {
    throw new Error('Game over!!');
  }

  this.setIsStrike(false);

  var pins =  number || this.randomNumberOfPins();
  if (this.getBonusCounter() >= 1) {
    this.setBonusPoints(pins);
    this.setBonusCounter(-1);
  }

  if (pins === this.STRIKE) {
    this.strike();
  }

  if (pins !== this.STRIKE) {
    this.setFrames(pins);
    this.calculateFrameCount();
    this.spareChecker(pins);
  }

  return pins;
};
Bowling.prototype.strike = function () {
  this.setIsStrike(true);
  this.setBonusCounter(2);
  this.setFrames(10);
  this.setFrames(0);
  this.calculateFrameCount();
};
