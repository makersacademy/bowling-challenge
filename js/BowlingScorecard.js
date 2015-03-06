var Scorecard = function() {
  this.currentFrame = [];
  this.allFrames = [];
};

Scorecard.prototype.bowl = function(result) {
  this.currentFrame.push(result);
  if ((result == 10)||(this.currentFrame.length == 2)) {this.allFrames.push(this.currentFrame); this.currentFrame = [];}
};

Scorecard.prototype.currentFrame = function() {
  return this.currentFrame();
};

Scorecard.prototype.allFrames = function() {
  return this.allFrames();
};