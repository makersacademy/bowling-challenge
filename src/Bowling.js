var Scorecard = function() {
  this.totalScore = 0;
};

Scorecard.prototype.addPoint = function(points) {
  this.totalScore += points;
};