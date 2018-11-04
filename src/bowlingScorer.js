var BowlingScorer = function() {
  this.totalScore = 0;
  this.frameScore = 0;
  this.frame = 1;
  this.bowls = 2;
  this.scoreChart = {};
};

BowlingScorer.prototype.returnScore = function() {
  return this.totalScore;
};

BowlingScorer.prototype.returnFrame = function() {
  return this.frame;
};

BowlingScorer.prototype.returnBowls = function() {
  return this.bowls;
};

BowlingScorer.prototype.returnFrameScore = function(frame) {
  this.frame = frame
  return this.frameScore;
};

BowlingScorer.prototype.bowl = function(score) {
  this.frameScore += score;
  this.bowls -= 1;
  if((this.frameScore === 10) || (this.bowls === 0)) {
    this.frame += 1;
    this.bowls = 2;
  };
};

BowlingScorer.prototype.updateScoreChart = function() {
  this.scoreChart[this.frame] = this.frameScore
};
