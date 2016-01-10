function Game() {
  this.currentFrame = { firstRoll: null, secondRoll: null }
  this.frames = []
  this.totScore = 0;
}

Game.prototype.play = function (ball) {
  if (this.currentFrame.firstRoll === null) {
    // NEW FRAME EXTRACTION
    this.currentFrame.firstRoll = ball;
    this.currentFrame.secondRoll = null;
    return this.currentFrame.firstRoll+" hit / Tot score "+this.getTotScore();
  } else {
    this.currentFrame.secondRoll = ball;
    this.frames.push(this.currentFrame);
    return this.currentFrame.secondRoll+" hit / Tot score "+this.getTotScore();
  }
};

Game.prototype.getTotScore = function () {
  if (this.currentFrame.secondRoll === null) {
    return this.totScore+" (pending)"
  } else if (this.currentFrameScore() === 10) {
    return this.totScore+" (pending)"
  } else {
    this.updateTotScore();
    return this.totScore;
  }
};

Game.prototype.updateTotScore = function () {
  return (this.totScore = this.currentFrameScore());
};

Game.prototype.currentFrameScore = function () {
  return this.currentFrame.firstRoll + this.currentFrame.secondRoll;
};
