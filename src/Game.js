function Game() {
  this.totalPoints = 0;
  this.playedFrames = [];
  this.currentFrame = null;
}

Game.prototype.play = function (frame) {
  if (this.currentFrame === null || this.currentFrame.isCompleted()) {
    return (this.currentFrame = frame || new Frame());
  } else {
    this.currentFrame.play();
    this.playedFrames.push(this.currentFrame);
    this.currentFrame = null;
    if (this.playedFrames.length === 10) {
      return "Well done! Your total points is "+this.getTotalPoints();
    } else {
      return this.previousFrame();
    }
  }
};

Game.prototype.previousFrame = function () {
  return this.playedFrames[this.playedFrames.length-1];
};

Game.prototype.getTotalPoints = function () {
  for (var i = 0; i <= 10; i++) {
    console.log(this.playedFrames[i])
    this.totalPoints += this.playedFrames[i].totalPoints;
  }
  return this.totalPoints;
};
