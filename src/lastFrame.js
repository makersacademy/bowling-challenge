function LastFrame(pins) {
  Frame.call(this, pins)
}
LastFrame.prototype = Object.create(Frame.prototype);
LastFrame.prototype.constructor = LastFrame;

LastFrame.prototype.totalScore = function() {
  return this.score();
}

LastFrame.prototype.isOver = function() {
  if (this._isBonusRoll() === false && this.rollPlayed() === 2) { return true; }
  if (this._isBonusRoll() && this.rollPlayed() === 3) { return true; }
  return false;
}

LastFrame.prototype._isBonusRoll = function() {
  return this.isStrike() || this.isSpare();
}
