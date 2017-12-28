function Game() {
  this.frames = [new Frame];
  this.currentFrame = this.frames[this.frames.length - 1]
}

Game.prototype.takeTurn = function () {
  this.createFrame();
  if (this.currentFrame.turnOne === null) {
    this.currentFrame.turnOne = Math.random();
  } else {
    this.currentFrame.turnTwo = Math.random();
    this.countScore(this.currentFrame)
  }
};

Game.prototype.createFrame = function () {
  if (this.currentFrame.turnTwo !== null) {
    this.getFrame();
  } else if (this.currentFrame.turnOne === 10) {
    this.getFrame();
  }
};


Game.prototype.getFrame = function () {
  this.frames.push(new Frame())
};

Game.prototype.countScore = function (frame) {
  frame.score = (frame.turnOne + frame.turnTwo);
};

