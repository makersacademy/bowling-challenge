var BowlingScorer = function() {
  this.totalScore = 0;
  this.frameScore = 0;
  this.frame = 1;
  this.bowlsRemaining = 2;
  this.scoreChart = [];
};

BowlingScorer.prototype.returnScore = function() {
  return this.totalScore;
};

BowlingScorer.prototype.returnFrame = function() {
  return this.frame;
};

BowlingScorer.prototype.returnBowls = function() {
  return this.bowlsRemaining;
};

BowlingScorer.prototype.returnFrameScore = function(frameNumber) {
  return this.scoreChart[frameNumber-1];
};

BowlingScorer.prototype.bowl = function(score) {
  this.frameScore += score;
  this.bowlsRemaining -= 1;
  if((this.frameScore === 10) || (this.bowlsRemaining === 0)) {
    this.scoreChart[this.frame-1] = this.frameScore;
    this.frame += 1;
    this.bowlsRemaining = 2;
    this.totalScore += this.frameScore;
    this.frameScore = 0;
  };
};

BowlingScorer.prototype.updateScoreChart = function() {
  this.scoreChart[this.frame] = this.frameScore; 
};
