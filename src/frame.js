function Frame(roll1, roll2) {
  this.roll1 = roll1;
  this.roll2 = roll2;
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
