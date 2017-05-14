function FinalFrame(first) {
  this.score = [first]
};

FinalFrame.prototype.isEnded = function() {
  return this.score.length === 2 && this.score[0] + this.score[1] < 10
}

FinalFrame.prototype.addBowl = function(n) {
  this.score.push(n);
}
