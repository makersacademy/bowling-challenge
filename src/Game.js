function Game() {
  this.N_FRAMES = 10;
  this.totalPoints = 0;
  this.playedFrames = [];
}

Game.prototype.play = function (frame) {
  if (!this.currentFrame || this.currentFrame.isCompleted()) {
    return (this.currentFrame = frame || new Frame());
  }
  if (!this.currentFrame.isCompleted()) {
    this.currentFrame.play();
    this.playedFrames.push(this.currentFrame);
    if (this.isOver()) {
      return "Well done! Your total points is "+this.getTotalPoints();
    }
    return this.currentFrame;
  }
};

Game.prototype.gameOver = function () {
  return "Well done! Your total points are "+this.getTotalPoints();
};

Game.prototype.getTotalPoints = function () {
  this.totalPoints = 0;
  for (var i = 0; i < this.N_FRAMES; i++) {
    this.totalPoints += this.playedFrames[i].getFramePoints();
  }
  return this.totalPoints;
};

Game.prototype.isOver = function () {
  if (this.playedFrames.length === this.N_FRAMES) {
    return true;
  } else {
    return false;
  }
}
