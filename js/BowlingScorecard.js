var Scorecard = function() {
  this.currentFrame = [];
  this.allFrames = [];
  this.strikeCounter = 0;
  this.strikeIndex = 0;
  this.spareCounter = 0;
  this.spareIndex = 0;
};

Scorecard.prototype.bowl = function(result) {
  this.currentFrame.push(result);
  if (this.strikeCounter > 0) {
    this.allFrames[this.strikeIndex][0] += result;
    this.strikeCounter -= 1;
  }
  if (this.spareCounter == 1) {
    this.allFrames[this.spareIndex][0] += result;
    this.spareCounter == 0;
  }
  if (result == 10) {
    this.strikeIndex = this.allFrames.length;
    this.strikeCounter = 2;
    this.allFrames.push([10]);
    this.currentFrame = [];
  }
  if (this.currentFrame.length == 2) {
    this.allFrames.push([this.currentFrame[0] + this.currentFrame[1]]);
    if (this.allFrames[this.allFrames.length-1] == 10) {
      this.spareCounter = 1;
      this.strikeIndex = this.allFrames.length;
    }
    this.currentFrame = [];
  }
};

Scorecard.prototype.currentFrame = function() {
  return this.currentFrame();
};

Scorecard.prototype.allFrames = function() {
  return this.allFrames();
};