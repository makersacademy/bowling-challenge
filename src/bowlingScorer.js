var BowlingScorer = function() {
  this.score = 0;
  this.frame = 1;
  this.bowls = 2;
};

BowlingScorer.prototype.returnScore = function() {
  return this.score;
};

BowlingScorer.prototype.returnFrame = function() {
  return this.frame;
};

BowlingScorer.prototype.bowl = function(score) {
  this.score += score;
  this.bowls -= 1;
  if((this.score === 10) || (this.bowls === 0)) {
    this.frame += 1;
  };
};
