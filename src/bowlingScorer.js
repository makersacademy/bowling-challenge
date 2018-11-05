var BowlingScorer = function() {
  this.totalScore = 0;
  this.frameScore = [,];
  this.frame = 1;
  this.roll = 1;
  this.scoreChart = [[],[],[],[],[],[],[],[],[],[]];
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

BowlingScorer.prototype.returnFrameScore = function(frameNumber) {
  return this.scoreChart[frameNumber-1];
};

BowlingScorer.prototype.isSpare = function(frameNumber) {
  return this.scoreChart[frameNumber-1][0] + this.scoreChart[frameNumber-1][1] === 10
};

BowlingScorer.prototype.firstBowl = function(score, frame) {
  this.frameScore[0] = score;
  this.scoreChart[frame-1][0] = score;
  this.roll++;
};
//   if((this.frameScore === 10) || (this.roll > 2)) {
//     this.scoreChart[this.frame-1] = this.frameScore;
//     this.frame++;
//     this.roll = 1;
//     this.totalScore += this.frameScore;
//     this.frameScore = 0;
//   };
// };

BowlingScorer.prototype.secondBowl = function(score, frame) {
  this.frameScore[1] = score;
  this.scoreChart[frame-1][1] = score;
  this.frame++;
};

BowlingScorer.prototype.updateScoreChart = function() {
  this.scoreChart[this.frame] = this.frameScore;
};

BowlingScorer.prototype.isLastFrame = function() {
  return this.frame === 10;
};
