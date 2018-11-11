function Frame(scores) {
  this.roll1 = scores[0];
  this.roll2 = scores[1];
  this.roll3 = scores[2];
  this.isSpare;
  this.isStrike;
  this.baseScore = 0;
  this.bonusScore = 0;
  this.frameScore = 0;
  this.calculateFrameType();
}

Frame.prototype.calculateFrameType = function () {
  if (this.roll1 === 10) {
    this.isStrike = true;
  } else if (this.roll1 + this.roll2 === 10) {
    this.isSpare = true;
  }
};
