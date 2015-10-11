function Game() {
  this.TOTAL_FRAMES = 10;
  this.frames = [];
  this.currentScore = 0;
}

Game.prototype.nextFrame = function() {
  if (this.frames.length === 0 ||
    this.frames[this.frames.length - 1].pinCount === 0) {
    this.frames.push(new Frame());
  } else if (this.frames[this.frames.length - 1].totalOfRolls.length >= 2) {
    this.frames.push(new Frame());
  }
};

Game.prototype.totalScore = function() {
  this.currentScore += this.frames[this.frames.length - 1].score;
  return this.currentScore;
};
