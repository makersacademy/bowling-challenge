function Score(frameNum, bonus1) {
  this.frameNum = frameNum;
  this.bonusFrame1 = bonus1;
}

Score.prototype.score = function() {
  if (this.frameNum.baseScore() === 10) {
    return (10 + this.bonusFrame1.roll1result());
  }
  return (this.frameNum.baseScore());
}
