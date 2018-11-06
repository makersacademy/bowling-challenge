var BowlingScorer = function() {
  this.totalScore = 0;
  this.frameScore = [,];
  this.frameTotal = 0;
  this.frame = 1;
  this.roll = 1;
  this.scoreChart = [ , , , , , , , , , ];
};
                  // 1  2  3  4  5  6  7  8  9  10
// this.scoreChart should contain arrays for each frame
// e.g. [[5,5],[5,5]...]

BowlingScorer.prototype.returnScore = function() {
  return this.totalScore;
};

BowlingScorer.prototype.returnFrame = function() {
  return this.frame;
};

BowlingScorer.prototype.returnRoll = function() {
  return this.roll;
};

BowlingScorer.prototype.returnFrameScore = function(frame) {
  return this.scoreChart[frame-1];
};

BowlingScorer.prototype.isSpare = function(frame) {
  return(this.scoreChart[frame-1] === 10 && this.roll === 1)
};

BowlingScorer.prototype.isStrike = function(frame) {
  return(this.scoreChart[frame-1] === 10 && this.roll === 2)
};

BowlingScorer.prototype.bowl = function(score) {
  if(this.roll % 2 === 1) return this.firstBowl(score, this.frame);
  else return this.secondBowl(score, this.frame);
};

BowlingScorer.prototype.firstBowl = function(score, frame) {
  this.frameTotal = 0
  this.frameScore[0] = score;
  this.scoreChart[frame-1] = score;
  this.roll++;
  if(this.frameScore[0] === 10) this.frame++
};

BowlingScorer.prototype.secondBowl = function(score, frame) {
  this.frameScore[1] = score;
  this.scoreChart[frame-1] += score;
  this.frame++;
  this.totalScore += this.scoreChart[frame-1];
  this.frameTotal = this.frameScore[0] + this.frameScore[1];
  this.roll = 1
};

BowlingScorer.prototype.updateScoreChart = function() {
  this.scoreChart[this.frame] = this.frameScore;
};

BowlingScorer.prototype.isLastFrame = function() {
  return this.frame === 10;
};
