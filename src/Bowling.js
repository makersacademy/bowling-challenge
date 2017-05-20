function Bowling (frames) {
  this.frames = new Frames();
  this.FRAME_COUNT_LIMIT = 10;
  this.STRIKE = 10;
  this._isFirstBowlOfFrame = true;
}
Bowling.prototype.toggleFirstBowlOfGame = function (value) {
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
Bowling.prototype.finalScore = function () {
  this.frameTotal = 0;

  for( var i in this.frames._frames )
  { this.frameTotal += this.frames._frames[i]; }

  this.frameTotal += this.frames._bonusPoints;
  return this.frameTotal;
};
Bowling.prototype.bowl = function (number) {
  if(this.frames._frameCounter == this.FRAME_COUNT_LIMIT) throw Error('Game over!!');
  this.frames.setIsStrike(false);
  var pins = number || this.randomNumberOfPins();

  if (this.frames._bonusCounter >= 1) this.frames.applyBonus(pins);

  this.toggleFirstBowlOfGame();

  if (pins === this.STRIKE) this.frames.strike();
  if (pins !== this.STRIKE) {
    this.applyPinsToFrame(pins);
    this.frames.spareChecker(pins);
  }
  return pins;
};
Bowling.prototype.applyPinsToFrame = function (pins) {
  this.frames.setFrames(pins);
  this.frames.calculateFrameCount();
  this.frames._currentFrame.push(pins);
};
Bowling.prototype.resetPins = function () {
  this.frames.resetPins();
  this._isFirstBowlOfFrame = true;
};
