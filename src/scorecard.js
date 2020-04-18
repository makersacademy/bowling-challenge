function Scorecard() {
  this.currentRoll = 1
  this.frame1 = {}
}

Scorecard.prototype.record = function(score) {
  if (this.currentRoll === 1) {
    this.frame1.roll1 = score;
    this.currentRoll = 2;
  } else {
    this.frame1.roll2 = score;
  }
};