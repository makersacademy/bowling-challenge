var Scorecard = function() {
  this.score = 0;
};

Scorecard.prototype.bowl = function(pinsRemaining) {
  bowlScore = Math.floor(Math.random() * (pinsRemaining + 1));
  this.score += bowlScore;
  console.log(this.score);
  return bowlScore;
};
