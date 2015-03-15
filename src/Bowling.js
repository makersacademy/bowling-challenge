var Scorecard = function() {
  this.frames = [[],[],[],[],[],[],[],[],[],[]];
  this.currentFrame = 0;
  this.currentBowl = 0;
};

Scorecard.prototype.addPoints = function(points) {
  this.frames[this.currentFrame][this.currentBowl] = points;
  this.updateBowlNumber();
  this.updateFrameNumber();
};

Scorecard.prototype.updateFrameNumber = function() {
  if (this.frames[this.currentFrame].length === 2) {
    this.currentFrame += 1;
  } else if (this.frames[this.currentFrame][0] === 10) {
    this.currentFrame += 1;
  }
};

Scorecard.prototype.updateBowlNumber = function() {
  this.currentBowl === 0 ? this.currentBowl = 1 : this.currentBowl = 0;
};