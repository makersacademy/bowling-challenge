function Frame(scores) {
  this.roll1 = scores[0];
  this.roll2 = scores[1] || null;
  this.isSpare;
  this.isStrike;
  this.calculateFrameType();
}

Frame.prototype.calculateFrameType = function () {
  if (this.roll1 === 10) {
    this.isStrike = true;
  } else if (this.roll1 + this.roll2 === 10) {
    this.isSpare = true;
  }
};
