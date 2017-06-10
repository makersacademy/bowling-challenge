function Frame() {
  this.firstScore = null;
  this.secondScore = null;
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
};

Frame.prototype.addSecondScore = function (number) {
  if (this.firstScore != null)
    this.secondScore = number
};
