function Scorecard() {
  this.frame1 = {
    roll1: null
  }
}

Scorecard.prototype.record = function(score) {
  this.frame1.roll1 = score
};