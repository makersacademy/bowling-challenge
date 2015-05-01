var Scorecard = function() {
  this.cumulativeScore = 0;
};

Scorecard.prototype.bowl = function(pinsRemaining) {
  bowlScore = Math.floor(Math.random() * (pinsRemaining + 1));
  this.cumulativeScore += bowlScore;
  return bowlScore;
};
