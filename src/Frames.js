'use strict';

function Frames () {
  this._frames = [];
  this._currentFrame = [];
  this._frameCounter = 1;
  this._bonusPoints = 0;
  this._bonusCounter = 0;
}
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
Frames.prototype.finalScore = function () {
  this.frameTotal = 0;

  for( var i in this._frames )
  { this.frameTotal += this._frames[i]; }

  this.frameTotal += this._bonusPoints;

  if ( this.frameTotal === 0 )
    return 'Gutter game! Better luck next time...';
  else
    return 'Final score is! ' + (this.frameTotal);
};
