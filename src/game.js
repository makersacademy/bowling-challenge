function Game() {
  this.frames = Array.apply(null, Array(10)).map(function(){return new Frame()});
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
    this.currentFrame.turnOne = score;
  } else if (this.currentFrame.turnTwo === null) {
    this.currentFrame.turnTwo = score;
  }
  if (this.isLastFrame() && this.isStrike()) {
    this.currentFrame.turnTwo = score;
    this.currentFrame.turnThree = score;
  } else if (this.isLastFrame() && this.isSpear()) {
    this.currentFrame.turnTwo = score;
    this.currentFrame.turnThree = score;
  }
}

Game.prototype.countScore = function (frame) {
  frame.score = (frame.turnOne + frame.turnTwo + frame.turnThree);

  if (this.index > 1 && this.selectFrame(this.index -2).turnOne === 10) {
    this.perfectGame(frame);
  } else if (this.index > 0) {
    this.countSpearScore(frame);
    this.countStrikeScore(frame);
  }
};

Game.prototype.countSpearScore = function (frame) {
  if (this.selectFrame(this.index -1).score === 10 &&
    this.selectFrame(this.index -1).turnTwo !== null) {
    this.selectFrame(this.index -1).score += (frame.turnOne + frame.turnTwo)
  }
}

Game.prototype.countStrikeScore = function (frame) {
  if (this.selectFrame(this.index -1).turnOne === 10 &&
    frame.turnTwo !== null) {
    this.selectFrame(this.index -1).score += frame.score
  }
}

Game.prototype.perfectGame = function (frame) {
  if (this.selectFrame(this.index -2).turnOne === 10 &&
    this.selectFrame(this.index -1).turnOne === 10) {
    this.selectFrame(this.index -2).score +=
      this.selectFrame(this.index -1).score + frame.score
  }
}

Game.prototype.isLastFrame = function () {
  return this.index === 9
}

Game.prototype.isStrike = function () {
  return this.selectFrame(this.index -1).turnOne === 10;
}

Game.prototype.isSpear = function () {
  return this.currentFrame.turnOne + this.currentFrame.turnTwo === 10;
}



Game.prototype.getCurrentFrame = function () {
  this.currentFrame = this.selectFrame(this.index)
}

Game.prototype.selectFrame = function (index) {
  return this.frames[index];
}