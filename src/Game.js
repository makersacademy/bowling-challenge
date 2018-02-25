function Game() {
  this.frames = [];
  this.totalScore = 0;
}

Game.prototype.addFrame = function addFrame(frame) {
  this.frames.push(frame);
};

Game.prototype.finalScore = function finalScore() {
  this.frames.forEach((frame) => {
    this.totalScore += frame.rolls[0].roll + frame.rolls[1].roll;
  });

  // Strike y Spare

  return this.totalScore;
};
