function Game() {
  this.frames = Array.apply(null, Array(10)).map(function () { return new Frame() });
  this.currentFrame;
  this.index = 0;
  this.getCurrentFrame();
}

Game.prototype.takeTurn = function (score) {
  this.getCurrentFrame();
  this.getScore(score)
  this.countScore(this.currentFrame);
  this.getNextFrame();
};

Game.prototype.getNextFrame = function () {
  if (this.currentFrame.turnOne === 10 ||
    this.currentFrame.turnTwo !== null) {
    this.index += 1;
  }
}

Game.prototype.getScore = function (score) {
  if (this.currentFrame.turnOne === null) {
    return this.currentFrame.turnOne = score;
  } else if (this.currentFrame.turnTwo === null) {
    return this.currentFrame.turnTwo = score;
  }
}

Game.prototype.countScore = function (frame) {
  frame.score = (frame.turnOne + frame.turnTwo);
  if (this.index > 0){
    this.countSpearScore(frame);
    this.countStrikeScore(frame);
  }
  
  // else if(frame.turnOne === 10) {
  //   this.countStrikeScore(frame);
  // }
};

Game.prototype.countSpearScore = function (frame) {
  if (this.frames[this.index - 1].score === 10 &&
    this.frames[this.index - 1].turnTwo !== null) {
      this.frames[this.index - 1].score += (frame.turnOne + frame.turnTwo)
  }
}

Game.prototype.countStrikeScore = function (frame) {
  if (this.frames[this.index - 1].turnOne === 10 &&
      frame.turnTwo !== null) {
      this.frames[this.index - 1].score += frame.score
  }
}

Game.prototype.getCurrentFrame = function () {
  this.currentFrame = this.frames[this.index]
}
