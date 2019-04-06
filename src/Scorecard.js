function Scorecard() {
  this.frames = [];
};

Scorecard.prototype.takeFrames = function (frame) {
  if (this.frames.length === 10) {
    return;
  }
  this.frames.push(frame);
};
