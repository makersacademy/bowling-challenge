function FrameTen(firstRoll, previousFrame) {
  this.firstRoll = firstRoll;
  this.secondRoll = null;
  this.thirdRoll = null;
  if (previousFrame) {
    previousFrame.ifBonusRequired(firstRoll);
  }
  this.previousFrame = previousFrame;
  this._bonusRollsRequired = 0;
  this.bonus = 0;
}

FrameTen.prototype = Object.create(Frame.prototype);

FrameTen.prototype.addRoll = function(rollValue) {
  if (this.secondRoll === null) {
    this.secondRoll = rollValue;
    this.previousFrame.ifBonusRequired(rollValue);
  } else if ((this.isStrike() || this.isSpare()) && this.thirdRoll === null) {
    this.thirdRoll = rollValue;
    this.previousFrame.ifBonusRequired(rollValue);
  }
};

FrameTen.prototype.total = function() {
  return this.firstRoll + this.secondRoll + this.thirdRoll;
};

FrameTen.prototype.isOngoing = function() {
  if (this.secondRoll === null) { return true; }
  if ((this.isStrike() || this.isSpare()) && this.thirdRoll === null) { return true; }
  return false;
};
