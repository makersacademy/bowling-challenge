var Scorecard = function() {
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.currentFrame = 0;
  this.currentBowl = 0;
  this.ballNumber = 1;
  this.allBalls = {};
};

Scorecard.prototype.addPoints = function(points) {
  this.frames[this.currentFrame][this.currentBowl] = points;
  this.updateBowlNumber();
  this.updateFrameNumber();
  this.ballNumber += 1;
};

Scorecard.prototype.updateFrameNumber = function() {
  if (this.frames[this.currentFrame].length === 2) {
    this.currentFrame += 1;
    this.currentBowl = 0;
  } else if (this.frames[this.currentFrame][0] === 10) {
    this.currentFrame += 1;
    this.currentBowl = 0;
  }
};

Scorecard.prototype.updateBowlNumber = function() {
  this.currentBowl === 0 ? this.currentBowl = 1 : this.currentBowl = 0;
};

Scorecard.prototype.calculateTotalScore = function() {
  var totalScore = 0;
  this.frames.forEach(function(frame) {
    frame.forEach(function(bowl) {
      totalScore += bowl;
    });
  });
  return totalScore;
};

// Scorecard.prototype.recordBallNumber = function() {
//   this.allBalls[this.ballNumber] = [this.currentFrame, this.currentBowl];
// };

// Scorecard.prototype.updateStrikePoints = function() {
//   if 
// };