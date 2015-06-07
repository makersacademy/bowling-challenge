function Scorecard() {
  this.frames = [];
 }

Scorecard.prototype.recordFrame = function(frame) {
  this.frames.push(frame)
};