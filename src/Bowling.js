'use strict';

function Bowling (frames) {
  this.frames = new Frames();
  this.FRAME_COUNT_LIMIT = 10;
  this.STRIKE = 10;
  this._isStrike = false;
  this._isSpare = true;
  this._isFirstBowlOfFrame = true;
}
Bowling.prototype.setIsStrike = function (value) {
  this._isStrike = value;
};
Bowling.prototype.setIsSpare = function (value) {
  this._isSpare = value;
};
Bowling.prototype.toggleFirstBowlOfGame = function ( value ) {
  this._isFirstBowlOfFrame = this._isFirstBowlOfFrame ? false : true;
};
Bowling.prototype.randomNumberOfPins = function () {
  this.previousNum = ( this.STRIKE - this.frames._frames.slice(-1).pop() );
  if (this._isFirstBowlOfFrame) {
    return Math.floor( Math.random () * ( this.FRAME_COUNT_LIMIT - 0 + 1)) + 0;
  } else {
    return Math.floor( Math.random () * ( this.previousNum - 0 + 1)) + 0;
  }
};
Bowling.prototype.bowl = function (number) {
  if(this.frames._frameCounter == this.FRAME_COUNT_LIMIT) throw Error('Game over!!');

  this.setIsStrike(false);

  var pins = number || this.randomNumberOfPins();

  if (this.frames._bonusCounter >= 1) this.frames.applyBonus(pins);
  this.toggleFirstBowlOfGame();

  if (pins === this.STRIKE) this.strike();
  else this.spareChecker(pins);
  return pins;
};
Bowling.prototype.strike = function () {
  console.log('Strike! X');
  this.setIsStrike(true);
  this.frames.setBonusCounter(2);
  this.frames.setFrames(this.STRIKE);
  this.frames.setFrames(0);
  this.frames.calculateFrameCount();
};
Bowling.prototype.spare = function () {
  console.log('Spare! /');
  this.setIsSpare(true);
  this.frames.setBonusCounter(1);
  this.frames.resetCurrentFrame([]);
};
Bowling.prototype.spareChecker = function (pins) {
  this.applyPinsToFrame(pins);

  if (this.frames._currentFrame.length === 1) {
    this.setIsSpare(false);
  } else if ((this.frames._currentFrame.length === 2) &&
    (this.frames._currentFrame[0] + this.frames._currentFrame[1] !== this.STRIKE)) {
    this.setIsSpare(false);
    this.frames.resetCurrentFrame([]);
  } else {
    this.spare();
  }
};
Bowling.prototype.applyPinsToFrame = function (pins) {
  this.frames.setFrames(pins);
  this.frames.calculateFrameCount();
  this.frames._currentFrame.push(pins);
};
