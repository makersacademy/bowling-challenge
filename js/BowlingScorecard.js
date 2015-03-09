var Scorecard = function() {
  this.currentFrame = [];
  this.allFrames = [];
  this.before = 0;
  this.beforeBefore = 0;
};

Scorecard.prototype.bowl = function(result) {
  this.currentFrame.push(result);
  if (this.allFrames.length == 10) { result = 0 };
  if (this.before == 10) { this.allFrames[this.allFrames.length - 1][0] += result; }
  if ((this.beforeBefore == 10) && (this.before != 10)) { this.allFrames[this.allFrames.length - 1][0] += result; }
  if ((this.beforeBefore == 10) && (this.before == 10)) { this.allFrames[this.allFrames.length - 2][0] += result; }
  if ((this.currentFrame.length == 1) && (this.before + this.beforeBefore == 10) && ((this.before || this.beforeBefore) != 10)) { this.allFrames[this.allFrames.length - 1][0] += result; }
  if (this.allFrames.length < 9) {
    if (result == 10) { this.allFrames.push([10]); this.currentFrame = []; }
    if (this.currentFrame.length == 2) {
      this.allFrames.push([this.currentFrame[0] + this.currentFrame[1]]);
      this.currentFrame = [];
    }
  }
  if (this.allFrames.length == 9) {
    if ((this.currentFrame.length == 2) && ((this.currentFrame[0] + this.currentFrame[1]) < 10)) { this.allFrames.push([this.currentFrame[0] + this.currentFrame[1]])};
    if (this.currentFrame.length == 3) { this.allFrames.push([this.currentFrame[0] + this.currentFrame[1] + this.currentFrame[2]])};
    if (this.currentFrame.length > 3) throw new "The game is over";
  }
  this.beforeBefore = this.before;
  this.before = result;
};

Scorecard.prototype.currentFrame = function() {
  return this.currentFrame();
};

Scorecard.prototype.allFrames = function() {
  return this.allFrames();
};