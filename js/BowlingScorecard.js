var Scorecard = function() {
  this.currentFrame = [];
  this.allFrames = [];
  this.strikeCounter = 0;
  this.strikeIndex = 0;
};

Scorecard.prototype.bowl = function(result) {
  this.currentFrame.push(result);
  if (this.strikeCounter > 0) {this.allFrames[this.strikeIndex][0] += result; this.strikeCounter -= 1;}
  if (result == 10) {this.strikeIndex = (this.allFrames.length); this.strikeCounter = 2;}
  console.log(this.allFrames.length);
  if ((result == 10)||(this.currentFrame.length == 2)) {this.allFrames.push(this.currentFrame); this.currentFrame = [];}
};

Scorecard.prototype.currentFrame = function() {
  return this.currentFrame();
};

Scorecard.prototype.allFrames = function() {
  return this.allFrames();
};