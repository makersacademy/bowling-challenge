function Score(frameNum, bonus1, bonus2) {
  this.frameNum = frameNum;
  this.bonusFrame1 = bonus1;
  this.bonusFrame2 = bonus2;
}

Score.prototype.score = function() {
  if (this.frameNum.roll1result() === 10) {
    if (this.bonusFrame1.roll1result() === 10) {
      return (20 + this.bonusFrame2.roll1result());
    }
    return (10 + this.bonusFrame1.baseScore());
  }
  if (this.frameNum.baseScore() === 10) {
    return (10 + this.bonusFrame1.roll1result());
  }
  return (this.frameNum.roll1result() + this.frameNum.roll2result() );
}
