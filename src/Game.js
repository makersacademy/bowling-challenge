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

Game.prototype.knockDown = function(numberOfPins) {
  if (this.frames.length === 0) {
    this.nextFrame();
  } else if (this.frames[this.frames.length - 1].totalOfRolls.length >= 2) {
    this.nextFrame();
  }

  this.frames[this.frames.length - 1].knockDown(numberOfPins);
};

Game.prototype.totalScore = function() {
  for (var i = 0; i < this.frames.length; i++) {
    if (this.frames[i].totalOfRolls.length >= 2) {
      this.currentScore += this.frames[i].score;
    }
  }

  return this.currentScore;
};
