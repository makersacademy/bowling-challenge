function Frame() {
  this.firstScore = null;
  this.secondScore = null;
  this.frameTotal = null;
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
};

Frame.prototype.addSecondScore = function (number) {
  if (this.firstScore != null && (this.frameTotal + number) < 10)
    this.secondScore = number
  this.frameTotal += this.secondScore
};
