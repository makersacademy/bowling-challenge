'use strict';

function Bowling () {
  this.FRAME_COUNT_LIMIT = 10;
  this.STRIKE = 10;
  this._frames = [];
  this._frameCounter = 1;
  this._bonusPoints = 0;
  this._strikeBonusCounter = 0;
  this._isStrike = false;
}
Bowling.prototype.getFrames = function () {
  return this._frames;
};
Bowling.prototype.setFrames = function (value) {
  this._frames.push(value);
};
Bowling.prototype.getFrameCounter = function () {
  return this._frameCounter;
};
Bowling.prototype.setFrameCounter = function (value) {
  this._frameCounter += value;
};
Bowling.prototype.getIsStrike = function () {
  return this._isStrike;
};
Bowling.prototype.setIsStrike = function (value) {
  this._isStrike = value;
};
Bowling.prototype.getBonusPoints = function () {
  return this._bonusPoints;
};
Bowling.prototype.setBonusPoints = function (value) {
  this._bonusPoints += value;
};
Bowling.prototype.getStrikeBonusCounter = function () {
  return this._strikeBonusCounter;
};
Bowling.prototype.setStrikeBonusCounter = function (value) {
  this._strikeBonusCounter += value;
};
Bowling.prototype.calculateFrameCount = function () {
  var numberOfBowls = this._frames.length;
  var frameCount = this._frameCounter = ( numberOfBowls / 2 );
  return frameCount;
};
Bowling.prototype.randomNumberOfPins = function () {
  return Math.floor( Math.random () * ( 10 - 1 + 1)) + 1;
};

Bowling.prototype.bowl = function (number) {
  if(this._frameCounter === this.FRAME_COUNT_LIMIT) {
    throw new Error('Game over!!');
  }

  this.setIsStrike(false);

  var pins =  number || this.randomNumberOfPins();
  if (this.getStrikeBonusCounter() >= 1) {
    this.setBonusPoints(pins);
    this.setStrikeBonusCounter(-1);
  }

  if (pins === this.STRIKE) {
    this.strike();
  }

  if (pins !== this.STRIKE) {
    this.setFrames(pins);
    this.calculateFrameCount();
  }

  return pins;
};

Bowling.prototype.strike = function () {
  this.setIsStrike(true);
  this.setStrikeBonusCounter(2);
  this.setFrames(10);
  this.setFrames(0);
  this.calculateFrameCount();
};
