function Game() {
  this.frames = [];
  this.totalScore = 0;
}

Game.prototype.addFrame = function addFrame(frame) {
  this.frames.push(frame);
};

Game.prototype.finalScore = function finalScore(frames) {
  frames.forEach((frame) => {
    this.totalScore += frame[0].roll + frame[1].roll;
  });

  return this.totalScore;
};
