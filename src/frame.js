function Frame() {
  this.firstScore = null;
  this.secondScore = null;
  this.frameTotal = null;
  this.strike = null;
  this.spare = null;
}

Frame.prototype.getFirstScore = function () {
  return this.firstScore
};

Frame.prototype.getSecondScore = function () {
  return this.secondScore
};

Frame.prototype.getTotalFrameScore = function () {
  return (this.getFirstScore() + this.getSecondScore())
};

Frame.prototype.addFirstScore = function (number) {
  this.firstScore = number
  this.frameTotal += this.firstScore
  this._isStrike();
};

Frame.prototype.addSecondScore = function (number) {
  if (this.firstScore != null && (this.frameTotal + number) <= 10)
    this.secondScore = number
  this.frameTotal += this.secondScore
  this._isSpare();
};

Frame.prototype._isStrike = function () {
  if (this.firstScore === 10)
    this.strike = true
    this.secondScore = 0
};

Frame.prototype._isSpare = function () {
  if (this.frameTotal === 10)
    this.spare = true
};
