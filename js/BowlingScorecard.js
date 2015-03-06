var Scorecard = function() {
  this.currentFrame = [];
  this.allFrames = [];
};

Scorecard.prototype.bowl = function(result) {
  if (this.currentFrame.length < 2) {this.currentFrame.push(result);}
  else {this.allFrames.push(this.currentFrame); this.currentFrame = []; this.currentFrame.push(result);}
};

Scorecard.prototype.currentFrame = function() {
  return this.currentFrame();
};

Scorecard.prototype.allFrames = function() {
  return this.allFrames();
};