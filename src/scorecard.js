function Scorecard() {
  this.totalScore = 0;
};

Scorecard.prototype.showTotal = function() {
  return this.totalScore;
};
