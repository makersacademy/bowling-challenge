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
  this._currentFrame = [];
  this._isFirstBowlOfFrame = true;
}
Bowling.prototype.setFrames = function (value) {
  this._frames.push(value);
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
Bowling.prototype.resetCurrentFrame = function (value) {
  this._currentFrame = value;
};
Bowling.prototype.toggleFirstBowlOfGame = function ( value ) {
  this._isFirstBowlOfFrame = this._isFirstBowlOfFrame ? false : true;
};
Bowling.prototype.calculateFrameCount = function () {
  var numberOfBowls = this._frames.length;
  var frameCount = this._frameCounter = ( numberOfBowls / 2 );
  return frameCount;
};
Bowling.prototype.randomNumberOfPins = function () {
  this.previousNum = ( this.STRIKE - this._frames.slice(-1).pop() );
  if (this._isFirstBowlOfFrame) {
    return Math.floor( Math.random () * ( this.FRAME_COUNT_LIMIT - 0 + 1)) + 0;
  } else {
    return Math.floor( Math.random () * ( this.previousNum - 0 + 1)) + 0;
  }
};
Bowling.prototype.finalScore = function () {
  this.frameTotal = 0;

  for( var i in this._frames )
  { this.frameTotal += this._frames[i]; }

  this.frameTotal += this._bonusPoints;

  if ( this.frameTotal === 0 )
    return 'Gutter game! Better luck next time...';
  else
    return 'Final score is! ' + (this.frameTotal);

};
Bowling.prototype.bowl = function (number) {
  if(this._frameCounter === this.FRAME_COUNT_LIMIT) {
    throw new Error('Game over!!');
  }

  this.setIsStrike(false);

  var pins = number || this.randomNumberOfPins();

  this.toggleFirstBowlOfGame();

  if (this._bonusCounter >= 1) {
    this.setBonusPoints(pins);
    this.setBonusCounter(-1);
  }
  if (pins === this.STRIKE) { this.strike(); }
  if (pins !== this.STRIKE) {
    this.setFrames(pins);
    this.calculateFrameCount();
    this.spareChecker(pins);
  }
  return pins;
};
Bowling.prototype.strike = function () {
  console.log('Strike! X');
  this.setIsStrike(true);
  this.setBonusCounter(2);
  this.setFrames(this.STRIKE);
  this.setFrames(0);
  this.calculateFrameCount();
};
Bowling.prototype.spareChecker = function (pins) {
  this._currentFrame.push(pins);
  if (this._currentFrame.length === 1) {
    this.setIsSpare(false);
  } else if ((this._currentFrame.length === 2) &&
    (this._currentFrame[0] + this._currentFrame[1] !== this.STRIKE)) {
    this.setIsSpare(false);
    this.resetCurrentFrame([]);
  } else {
    console.log('Spare! /');
    this.setIsSpare(true);
    this.setBonusCounter(1);
    this.resetCurrentFrame([]);
  }
};
