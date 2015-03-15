var Scorecard = function() {
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.currentFrame = 0;
  this.currentBowl = 0;
  this.ballNumber = 1;
  this.allBalls = {};
};

Scorecard.prototype.addPoints = function(points) {
  this.frames[this.currentFrame][this.currentBowl] = points;
  this.updateStrikePoints(points);
  this.recordBallNumber();
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

Scorecard.prototype.recordBallNumber = function() {
  this.allBalls[this.ballNumber] = [this.currentFrame, this.currentBowl];
};

Scorecard.prototype.updateStrikePoints = function(points) {
  var twoBowlsAgo = this.allBalls[this.ballNumber - 2];
  var oneBowlAgo = this.allBalls[this.ballNumber - 1];
  if (twoBowlsAgo === undefined) {
    return;
  } else if (this.frames[twoBowlsAgo[0]][twoBowlsAgo[1]] === 10) {
    this.frames[twoBowlsAgo[0]][twoBowlsAgo[1]] += points;
    this.frames[twoBowlsAgo[0]][twoBowlsAgo[1]] += this.frames[oneBowlAgo[0]][oneBowlAgo[1]];
  }
};