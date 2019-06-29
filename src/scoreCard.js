function Frame() {
  this.firstRoll = true;
};


function ScoreCard(frame = new Frame) {
  this.frames = [frame]
  this.currentFrame = this.frames[this.frames.length - 1]
};

ScoreCard.prototype.isFirstRoll = function () {
  return this.currentFrame['firstRoll'];
};
