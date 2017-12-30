function Game() {
  this.frames = Array.apply(null, Array(10)).map(function () {return new Frame()});
  this.currentFrame = this.frames[this.index]
  this.index = 0;
}

Game.prototype.takeTurn = function () {
  this.getCurrentFrame();
  this.getScore()
  this.countScore(this.currentFrame);
  this.getNextFrame();
};

Game.prototype.getNextFrame = function () {
  if(this.currentFrame.turnOne === 10 ||
     this.currentFrame.turnTwo !== null){
    this.index += 1;
  }
}

Game.prototype.getScore = function () {
  if (this.currentFrame.turnOne === null) {
    this.currentFrame.turnOne = Math.random();
  } else if (this.currentFrame.turnTwo === null) {
    this.currentFrame.turnTwo = Math.random();
  }
}

Game.prototype.countScore = function (frame) {
  frame.score = (frame.turnOne + frame.turnTwo);
};

Game.prototype.getCurrentFrame = function () {
  this.currentFrame = this.frames[this.index]
}
